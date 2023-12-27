import { NestFactory } from '@nestjs/core';
import { ServiceOrderModule } from './service-order.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ServiceOrderModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(8080);
}
bootstrap();
