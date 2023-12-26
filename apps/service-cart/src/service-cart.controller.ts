import { Controller, Get } from '@nestjs/common';
import { ServiceCartService } from './service-cart.service';

@Controller()
export class ServiceCartController {
  constructor(private readonly serviceCartService: ServiceCartService) {}

  @Get()
  getHello(): string {
    return this.serviceCartService.getHello();
  }
}
