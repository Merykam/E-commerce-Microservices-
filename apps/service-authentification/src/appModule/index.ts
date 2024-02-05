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
      'mongodb+srv://ossamakharbaq:123AZERTY@cluster0.mdhufrc.mongodb.net/service-authentication?retryWrites=true&w=majority',
      {
        autoCreate: true,
      },
    ),
    AuthModule,
  ],
})
export class AppModule {}
