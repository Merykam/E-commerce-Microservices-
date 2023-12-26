import { Module } from '@nestjs/common';
import { ServiceCartController } from './service-cart.controller';
import { ServiceCartService } from './service-cart.service';

@Module({
  imports: [],
  controllers: [ServiceCartController],
  providers: [ServiceCartService],
})
export class ServiceCartModule {}
