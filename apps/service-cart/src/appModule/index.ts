import { Module } from '@nestjs/common';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CartModule, ProductModule, UserModule],
})
export class AppModule {}
