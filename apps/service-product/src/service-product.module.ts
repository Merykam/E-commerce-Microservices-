import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ServiceProductController } from './service-product.controller';
import { ServiceProductService } from './service-product.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kamaychmeryem:12345678AZERTY@cluster0.dal8kug.mongodb.net/test?retryWrites=true&w=majority'),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/E-commerce-Products'),
    ProductModule,
    AdminModule
  ],
  controllers: [ServiceProductController],
  providers: [ServiceProductService],
})
export class ServiceProductModule  {
 
}
