import { NestFactory } from '@nestjs/core';
import { ServicePaymentModule } from './service-payment.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicePaymentModule);
  await app.listen(3003);
}
bootstrap();
