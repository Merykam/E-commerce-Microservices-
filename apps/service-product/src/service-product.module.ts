import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ServiceProductController } from './service-product.controller';
import { ServiceProductService } from './service-product.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/E-commerce-Products'),
    ProductModule
  ],
  controllers: [ServiceProductController],
  providers: [ServiceProductService],
})
export class ServiceProductModule  {
 
}
