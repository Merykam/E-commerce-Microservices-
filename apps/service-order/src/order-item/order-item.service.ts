import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderItemDTO } from './DTO';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(data: OrderItemDTO) {
    const insertedOrderItem = await this.prisma.orderItem.create({data});
    return insertedOrderItem;
  }

  async updateOrderItem(id: number, data: OrderItemDTO) {
    const updatedOrderItem = await this.prisma.orderItem.update({
      where: { id },
      data: {
        quantity: data.quantity,
      },
    });
    return updatedOrderItem;
  }

  async deleteOrderItem(id: number) {
    const deletedOrderItem = await this.prisma.orderItem.delete({
      where: { id },
    });
    return deletedOrderItem;
  }

  
}
