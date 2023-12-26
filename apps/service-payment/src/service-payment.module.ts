import { Module } from '@nestjs/common';
import { ServicePaymentController } from './service-payment.controller';
import { ServicePaymentService } from './service-payment.service';

@Module({
  imports: [],
  controllers: [ServicePaymentController],
  providers: [ServicePaymentService],
})
export class ServicePaymentModule {}
