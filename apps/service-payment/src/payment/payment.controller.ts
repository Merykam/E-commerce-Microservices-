import { Controller, Get, Post} from '@nestjs/common';
import { PaymentService } from './payment.service';


@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  

  @Post()
  async stripMethode() {
    const order = await this.paymentService.createPayment(2);
  }
  @Get()
  async getOrder() {
    const order = await this.paymentService.paypalPayment(2);
    return order;
  }

}
