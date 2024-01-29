import { Controller, Get, Post, Query, Res} from '@nestjs/common';
import { PaymentService } from './payment.service';


@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  

  @Post('stripe')
  async stripMethode() {
    const order = await this.paymentService.createPayment(2);
  }
  @Post('paypal')
  async getOrder(@Res() res  ) {
    const order = await this.paymentService.paypalPayment(2);
    console.log(order,"order")
    res.redirect(order);
  }
@Get('success')
async success(@Query('paymentId') paymentId:string,@Query('PayerID') PayerID:string,@Res() res  ) {
  const order = await this.paymentService.executePaymentPaypal(paymentId,PayerID);
  res.redirect('http://localhost:3003/sevice-payment');
}
}