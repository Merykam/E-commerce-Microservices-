import { NestFactory } from '@nestjs/core';
import { ServiceCartModule } from './service-cart.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceCartModule);
  await app.listen(3002);
}
bootstrap();
