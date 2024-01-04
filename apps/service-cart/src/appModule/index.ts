import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
// import { LoggerMiddleware } from '../logger/logger.middleware';

@Module({
  imports: [CartModule, ProductModule, UserModule, CategoryModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes('*');
  // }
}
