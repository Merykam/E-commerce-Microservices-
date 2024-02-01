import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
// import { StripPaymentService } from './strip-payment/strip-payment.service';
import { StripeService } from './stripe/stripe.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, StripeService],
})
export class PaymentModule {}
