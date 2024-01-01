import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderDTO } from '../DTO';

@Injectable()
export class OrderItemsValidationPipe implements PipeTransform {
  constructor(private readonly prismaService: PrismaService) {}

  async transform(orderDTO: OrderDTO, metadata: ArgumentMetadata) {
    const { orderItems } = orderDTO;
    if (!Array.isArray(orderItems)) {
      throw new BadRequestException('orderItems must be an array');
    }
    const validOrderItems: number[] = [];

    for (const itemId of orderItems) {
      const itemExists = await this.prismaService.orderItem.findUnique({
        where: { id: itemId },
      });

      if (itemExists) {
        validOrderItems.push(itemId);
      }
    }

    if (validOrderItems.length === orderItems.length) {
        console.log("hii");
        return { ...orderDTO, orderItems: validOrderItems };
    } else {
      throw new BadRequestException('Invalid order items');
    }
  }
}
