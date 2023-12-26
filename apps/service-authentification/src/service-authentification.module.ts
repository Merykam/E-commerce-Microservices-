import { Module } from '@nestjs/common';
import { ServiceAuthentificationController } from './service-authentification.controller';
import { ServiceAuthentificationService } from './service-authentification.service';

@Module({
  imports: [],
  controllers: [ServiceAuthentificationController],
  providers: [ServiceAuthentificationService],
})
export class ServiceAuthentificationModule {}
