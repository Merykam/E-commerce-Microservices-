import { Injectable, Redirect } from '@nestjs/common';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
const paypal = require('paypal-rest-sdk');
const stripe = require('stripe')('sk_test_51OU9KPIbWimGzaSpkiU2vKX6nkMc6Kx262DSWcFB8PVXWxxIj2azJANGwvyKtBPhNrvMmjks2dk8rZ1hH0gmnd1900HZ2jSntB')

@Injectable()
export class PaymentService {
 
  
  public prisma=new PrismaClient();
  async getOrder(orderId:number){
      try {
        const order=await this.prisma.order.findUnique({
          where:{
            id:orderId
          },include:{
            customer:true,
            cart:{
              include:{
                product:true
              }
            }
          }
        })
        return order;
      } catch (error) {
        throw error;
      }
  }
  async findPaymentByOrderId(id:number){
    try {
      const payment=await this.prisma.payment.findFirst({
        where:{
          orderId:id
        }
      })
      return payment;
    } catch (error) {
      console.log(error.code);
      throw error;
    }
  }
  async updateOrder(order:{id:number}){
    const updateOrder=await this.prisma.order.update({
      where:{
        id:order.id
      },
      data:{
        status:'Paid'
      }
    })
    return updateOrder;
  }
  
  async paypalPayment(orderId: number) {
    try {
      const order = await this.getOrder(orderId);
      const paymentData: any = {
        orderId: order.id,
        amount: order.cart.totalprice,
        methodPayment: "Paypal",
      };
      
      const paypal = require('paypal-rest-sdk');
      
      paypal.configure({
        mode: 'sandbox',
        client_id: 'Ad80uyYqrBtJNO8xk0UkHwYeYVvdjv26cZyOEo_1JK5HwAKApru8yakNAh7zV8q6MnjETlUjQKVZj5u-',
        client_secret: 'EHwhdHouzKMjo3eCEqSLsEQs_lPP8nrW9iq49tiB3EOG8iLRk0hlJYdKUnJK46SlwUb_PdEMBLYtEZ9H',
      });
  
      const create_payment_json = {
        "intent": "sale",
        "payer": {
          "payment_method": "paypal",
        },
        "redirect_urls": {
          "return_url": "http://localhost:3003/payment/success",
          "cancel_url": "http://localhost:3003/payment/cancel",
        },
        "transactions": [{
          "item_list": {
            "items": [{
              "name": "item",
              "sku": "001",
              "price": order.cart.totalprice,
              "currency": "USD",
              "quantity": 1, // Add the quantity property
            }],
          },
          "amount": {
            "currency": "USD",
            "total": order.cart.totalprice.toString(),
          },
          "description": "This is the payment description.",
        }],
      };
      
      const payment:any = await new Promise((resolve, reject) => {
        paypal.payment.create(create_payment_json, (error: any, payment: any) => {
          if (error) {
            reject(error.response ? error.response : error.message);
          } else {
           for(let i=0;i<payment.links.length;i++){
             if(payment.links[i].rel==='approval_url'){
               resolve(payment.links[i].href);
              }
            }
          }
        });
      });
      
      console.log("Create Payment Response");
      return payment;
      
    } catch (error) {
      console.error("Error in paypalPayment:", error);
    }
  }
  async executePaymentPaypal(paymentId: string, PayerID: string) {
    console.log(paymentId,"ddddd", PayerID)
    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: '19.99', 
          },
        },
      ],
    };
  
    try {
      paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
          console.error('Error executing PayPal payment:', error.response ? error.response.data : error.message);
          throw error;
        } else {
          console.log('Get Payment Response');
          if (payment) {
            console.log(JSON.stringify(payment));

          } else {
            console.error('Payment object is undefined');
          }
        }
      });
    } catch (error) {
      console.error('Error executing PayPal payment:', error.response ? error.response.data : error.message);
    }
  }


  async createPaymentIntent(order:{id:number,cart:{totalprice:number},customer:{name:string}}){
    try { 
      const amount=Math.round( order.cart.totalprice * 100);
      const paymentIntent=await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
         payment_method_types:['card'],
         payment_method:'pm_card_visa',
         confirm:true,
        metadata:{
          orderId:order.id,
          Client:order.customer.name,
          succss:true
        }
      })
      return paymentIntent;
    } catch (error) {
      throw error;
    }
  }
  
   async createPayment(orderId:number){
        try {
          const order=await this.getOrder(orderId);
          const strip=await this.createPaymentIntent(order)
          const paymentData:any = {
            orderId: order.id,
            amount: order.cart.totalprice,
            methodPayment: "Stripe",
          };
        if(strip.status==='succeeded'){
        const payment = await this.prisma.payment.create({
          data: paymentData,
      });
       const updateOrder= this.updateOrder(order);
      return payment;
                      }
        } catch (error) {
          console.log(error.message);
        }
   }

}
