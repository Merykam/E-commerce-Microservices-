import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceAuthentificationService {
  getHello(): string {
    return 'Hello Authentification';
  }
}
