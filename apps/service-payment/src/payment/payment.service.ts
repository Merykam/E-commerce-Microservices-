import { Injectable } from '@nestjs/common';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
const stripe = require('stripe')('sk_test_51OU9KPIbWimGzaSpkiU2vKX6nkMc6Kx262DSWcFB8PVXWxxIj2azJANGwvyKtBPhNrvMmjks2dk8rZ1hH0gmnd1900HZ2jSntB')

@Injectable()
export class PaymentService {
 
  async getOrder(orderId:number){
      try {
        const prisma=new PrismaClient();
        const order=await prisma.order.findUnique({
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
  async createPaymentIntent(orderId:number){
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
      
      const order=await this.getOrder(orderId);
      const amount=Math.round( order.cart.totalprice * 100);
      const paymentIntent=await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
        metadata:{
          orderId:order.id,
          Client:order.customer.name,
        }
      })
      return paymentIntent;
    } catch (error) {
      throw error;
    }
  }
  // async createPayment
}
