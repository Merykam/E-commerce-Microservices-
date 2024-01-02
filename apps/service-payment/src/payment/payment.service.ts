import { Injectable } from '@nestjs/common';
// import { CreatePaymentDto } from './dto/create-payment.dto';
// import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
const stripe = require('stripe')('pk_test_51OU9KPIbWimGzaSpaR29BsuVAbsXEpssCTB93jcw0gCxaeEfk3sw7rdLJKxi70NpPgntpcA6yz02Trx9egqmUt5l00XqzcQqaC')

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

}
