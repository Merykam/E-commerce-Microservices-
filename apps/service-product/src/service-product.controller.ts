import { Controller, Get } from '@nestjs/common';
import { ServiceProductService } from './service-product.service';

@Controller()
export class ServiceProductController {
  constructor(private readonly serviceProductService: ServiceProductService) {}

  @Get()
  getHello(): string {
    return this.serviceProductService.getHello();
  }
}
