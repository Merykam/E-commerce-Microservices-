import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';
import 'dotenv/config';
import { ProductModule } from './product/product.module';



async function bootstrap() {
  const app = await NestFactory.create(ServiceProductModule);
  await app.listen(3003);
}
bootstrap();
