import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceCartService {
  getHello(): string {
    return 'Hello Cart';
  }
}
