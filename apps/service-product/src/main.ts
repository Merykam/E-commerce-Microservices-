import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';
import 'dotenv/config';
import { ProductModule } from './product/product.module';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(ServiceProductModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true, 
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3003);
}
bootstrap();
