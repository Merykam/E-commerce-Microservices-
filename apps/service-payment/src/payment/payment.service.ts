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
        if(!order){
          throw new Error('Order not found');
        }
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
  async createPayment(order,methodPayment){
    try {
      const payment = await this.prisma.payment.create({
        data: {
          orderId: order.id,
          amount: order.cart.totalprice,
          methodPayment: methodPayment,
        },
    });
    return payment;
    } catch (error) {
      console.log(error.message);
    }
  }
 }
