import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceProductService {
  getHello(): string {
    return 'Hello Product';
  }
}
