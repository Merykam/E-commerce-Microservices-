import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDTO, UpdateOrderDTO } from './DTO';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getAllOrders() {
    try {
      const orders = await this.prisma.order.findMany({
        include: {
          user: {
            select : {
              name: true,
            }
          },
          orderItems: {
            include: {
              product: {
                select : {
                  name: true,
                  price : true,
                }
              },
            },
          },
        },
      });
      return orders;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'something wrong occurred while retrieving the orders',
      );
    }
  }
  async createOrder(data: OrderDTO) {
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

  async updateOrder(id: string, data: UpdateOrderDTO) {
    try {
      const updatedOrder = await this.prisma.order.update({
        where: { id: parseInt(id) },
        data,
      });
      return updatedOrder;
    } catch (error) {
      throw new InternalServerErrorException('Error while updating the order');
    }
  }
}
