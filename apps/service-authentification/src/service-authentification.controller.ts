import { Controller, Get } from '@nestjs/common';
import { ServiceAuthentificationService } from './service-authentification.service';

@Controller()
export class ServiceAuthentificationController {
  constructor(private readonly serviceAuthentificationService: ServiceAuthentificationService) {}

  @Get()
  getHello(): string {
    return this.serviceAuthentificationService.getHello();
  }
}
