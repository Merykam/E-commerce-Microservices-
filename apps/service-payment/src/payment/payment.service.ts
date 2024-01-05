import { Injectable } from '@nestjs/common';
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
        if(!order){
          throw new Error('Order not found')
        }
        if(order.status !=='Pending'){
          throw new Error('Order has been paid')
        }
        return order;
      } catch (error) {
        throw error;
      }
  }
  async createPaymentIntent(order:any){
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
  async updateOrder(order:any){
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
  
      const payment = await new Promise((resolve, reject) => {
        paypal.payment.create(create_payment_json, (error: any, payment: any) => {
          if (error) {
            reject(error.response ? error.response : error.message);
          } else {
            resolve(payment);
          }
        });
      });
  
      console.log("Create Payment Response");
      console.log(payment);
  
    } catch (error) {
      console.error("Error in paypalPayment:", error);
    }
  }
  
   async createPayment(orderId:number){
        try {
          const order=await this.getOrder(orderId);
          const strip=await this.createPaymentIntent(order)
          const paymentData:any= {
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
