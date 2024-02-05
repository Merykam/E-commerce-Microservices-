import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schema/auth..schema';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../helpers/mail/mail.module';
import { EmailService } from '../helpers/mail/mail.service';
import { AuthGuard } from '../guards/AuthGuard';
import { APP_GUARD } from '@nestjs/core';
import { DATABASE_CONNECTION } from '../config/database/database.module';

@Module({
  imports: [
    DATABASE_CONNECTION,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: process.env.SECREtKEYJWT,
      signOptions: { expiresIn: '2day' },
    }),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    EmailService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
