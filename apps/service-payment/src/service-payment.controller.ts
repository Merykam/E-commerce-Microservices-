import { Controller, Get } from '@nestjs/common';
import { ServicePaymentService } from './service-payment.service';

@Controller('service-payment')
export class ServicePaymentController {
  constructor(private servicePaymentService: ServicePaymentService) {}

  @Get()
  getHello(): string {
    return this.servicePaymentService.getHello();
  }
}
