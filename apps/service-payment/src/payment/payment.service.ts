import { Injectable } from '@nestjs/common';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
import { json } from 'stream/consumers';
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
      // const paymentMethod = await stripe.paymentMethods.create({
      //   type: 'card',
      //   card: {
      //     number: '4242424242424242',
      //     exp_month: 8,
      //     exp_year: 2026,
      //     cvc: '314',
      //   },
      // });
      
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
          console.log(typeof(order.id)) 
          const strip=await this.createPaymentIntent(order)
          console.log(strip,'strip');
          const paymentData:any= {
            orderId: order.id,
            amount: order.cart.totalprice,
            methodPayment: "Stripe",
        };
        console.log(paymentData,'paymentData2');
        if(strip.status==='succeeded'){
        const payment = await this.prisma.payment.create({
          data: paymentData,
      });
      const updateOrder=await this.prisma.order.update({
        where:{
          id:order.id
        },
        data:{
          status:'Paid'
        }
      })
      console.log(updateOrder,'updateOrder')
      if (payment) {
        console.log('payment');
      }
      return payment;}else{console.log('error')}
        } catch (error) {
          console.log(error.message);
        }
   }
}
