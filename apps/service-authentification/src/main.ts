import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(new LoggerMiddleware().isAuth);
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
