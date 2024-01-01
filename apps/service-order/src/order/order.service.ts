import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDTO, UpdateOrderDTO } from './DTO';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: OrderDTO) {
    console.log(data);
    try {
      const insertedOrder = await this.prisma.order.create({
        data: { userId: data.userId, status: data.status },
      });
      await this.assignOrderIdToOrderItems(insertedOrder.id, data.orderItems);
      return insertedOrder;
    } catch (error) {
      throw new InternalServerErrorException(
        'something wrong occurred while creating the order',
      );
    }
  }

  async assignOrderIdToOrderItems(orderId: number, orderItems: any[]) {
    try {
      await this.prisma.orderItem.updateMany({
        where: {
          id: { in: orderItems.map((orderItem) => orderItem) },
        },
        data: {
          orderId,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while assigning order to orderItems',
      );
    }
  }

  async updateOrder(data: UpdateOrderDTO) {
    try {
      const updatedOrder = await this.prisma.order.update({
        where: { id: data.id },
        data,
      });
      return updatedOrder;
    } catch (error) {
      throw new InternalServerErrorException('Error while updating the order');
    }
  }
}
