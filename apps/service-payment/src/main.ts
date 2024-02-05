// Import necessary modules
import { NestFactory } from '@nestjs/core';
import { ServicePaymentModule } from './service-payment.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ServicePaymentModule);

  // app.use(cors());
  app.enableCors(
    {
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  );

  await app.listen(3003);
}
bootstrap();
