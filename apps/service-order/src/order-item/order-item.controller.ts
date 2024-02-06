import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { OrderItemService } from './order-item.service';
import { OrderItemDTO } from './DTO';

@Controller('order-item')
export class OrderItemController {
  constructor(private OrderItemService: OrderItemService) {}

  @Post('')
  createOrderItem(@Body() data: OrderItemDTO) {
    console.log(data);
    return this.OrderItemService.createOrderItem(data);
  }

  @Patch(':id')
  updateOrderItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OrderItemDTO,
  ) {
    return this.OrderItemService.updateOrderItem(id, data);
  }

  @Delete(':id')
  deleteOrderItem(@Param('id', ParseIntPipe) id: number) {
    return this.OrderItemService.deleteOrderItem(id);
  }
}
