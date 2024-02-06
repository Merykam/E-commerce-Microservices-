import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminSchema } from '../src/product/schemas/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
 
  imports:[MongooseModule.forFeature([{name:'Admin',schema:AdminSchema}])],

  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}
