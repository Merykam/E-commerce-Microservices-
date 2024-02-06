import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        host: '127.0.0.1',
        port: 6379,
        ttl: 300000,
      }),
    }),
  ],
  exports: [CacheModule],
})
export class RedisCacheModule {}
