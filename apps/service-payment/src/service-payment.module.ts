import { Module } from '@nestjs/common';
import { ServicePaymentController } from './service-payment.controller';
import { ServicePaymentService } from './service-payment.service';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [PaymentModule],
  controllers: [ServicePaymentController],
  providers: [ServicePaymentService],
})
export class ServicePaymentModule {}
