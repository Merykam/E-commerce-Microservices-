import { Controller, Get } from '@nestjs/common';
import { ServicePaymentService } from './service-payment.service';

@Controller()
export class ServicePaymentController {
  constructor(private readonly servicePaymentService: ServicePaymentService) {}

  @Get()
  getHello(): string {
    return this.servicePaymentService.getHello();
  }
}
