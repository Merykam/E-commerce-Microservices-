import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicePaymentService {
  getHello(): string {
    return 'Hello Payment';
  }
}
