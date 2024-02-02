import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser.default());

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  // app.use(new LoggerMiddleware().isAuth);
  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
// lkjlkj
// ùmjkùljù
// kjhlkjgljg
bootstrap();
