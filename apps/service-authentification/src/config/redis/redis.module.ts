import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
const redisStore = require('cache-manager-redis-store');

@Module({
  imports: [
    CacheModule.register({
      store: require('cache-manager').redisStore,
      host: '127.0.0.1',
      port: 6379,
      ttl: 1000 * 3600,
    }),
  ],
  exports: [CacheModule],
})
export class RedisCacheModule {}
