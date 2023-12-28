import { Module } from '@nestjs/common';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [CartModule, ProductModule, UserModule, CategoryModule],
})
export class AppModule {}
