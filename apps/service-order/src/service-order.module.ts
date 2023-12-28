import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderModule } from './order/order.module';

@Module({
  imports : [UserModule,ProductModule, OrderItemModule, OrderModule]
})
export class ServiceOrderModule {}
