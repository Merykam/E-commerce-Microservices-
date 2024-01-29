import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { StripPaymentService } from './strip-payment/strip-payment.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, StripPaymentService],
})
export class PaymentModule {}
