import { Body, Controller, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { OrderDTO, UpdateOrderDTO } from './DTO';
import { OrderService } from './order.service';
import { OrderItemsValidationPipe } from './pipes/order-items-validation.pipe';
import { PrismaService } from '../prisma/prisma.service';

@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}

  @Get('')
  getOrders() {
    return this.OrderService.getAllOrders();
  }

  @Post('')
  @UsePipes(new OrderItemsValidationPipe(new PrismaService))
  createOrder(@Body() data: OrderDTO) {
    return this.OrderService.createOrder(data);
  }

  @Patch(':id')
  updateOrder(@Param('id') id: string , @Body() data: UpdateOrderDTO) {
    return this.OrderService.updateOrder(id ,data);
  }
}
