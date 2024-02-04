import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://rachid:rachid1234567890@cluster0.4k3tkhp.mongodb.net/service-authentification?retryWrites=true&w=majority',
      {
        autoCreate: true,
      },
    ),
    AuthModule,
  ],
})
export class AppModule {}
