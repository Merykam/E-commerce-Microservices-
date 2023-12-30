import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:2717/service-authentification'),
  ],
})
export class DATABASE_CONNECTION {}
