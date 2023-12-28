import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDTO } from './DTO';

@Controller('order')
export class OrderController {
    @Post('')
    createOrder(@Body() data: OrderDTO){
        return data
    }
}
