import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaModule } from '../config/database/config.module';
import { RedisCacheModule } from '../config/redis/redis.module';
import { CacheModule } from '@nestjs/cache-manager';
const redisStore = require('cache-manager-redis-store');
import * as Redis from 'redis';
@Module({
  imports: [PrismaModule, RedisCacheModule],
  controllers: [CartController],
  providers: [CacheModule, CartService],
})
export class CartModule {}
