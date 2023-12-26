import { NestFactory } from '@nestjs/core';
import { ServiceAuthentificationModule } from './service-authentification.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceAuthentificationModule);
  await app.listen(3001);
}
bootstrap();
