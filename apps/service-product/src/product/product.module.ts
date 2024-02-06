import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from 'apps/service-product/admin/admin.module';


@Module({
  imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}]), AdminModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
