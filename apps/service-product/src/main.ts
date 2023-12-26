import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceProductModule);
  await app.listen(4000);
}
bootstrap();
