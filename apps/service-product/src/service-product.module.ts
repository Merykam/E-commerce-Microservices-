import { Module } from '@nestjs/common';
import { ServiceProductController } from './service-product.controller';
import { ServiceProductService } from './service-product.service';

@Module({
  imports: [],
  controllers: [ServiceProductController],
  providers: [ServiceProductService],
})
export class ServiceProductModule {}
