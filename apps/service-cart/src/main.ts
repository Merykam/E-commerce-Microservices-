import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(new LoggerMiddleware().use);

  await app.listen(9000);
}
bootstrap();
