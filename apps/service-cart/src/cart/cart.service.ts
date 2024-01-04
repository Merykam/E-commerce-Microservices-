import { Injectable, Inject } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../config/database/config.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
// import { RedisCacheModule } from '../config/redis/redis.module';

@Injectable()
export class CartService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prismaService: PrismaService,
    // @Inject('REDIS') private readonly redis: RedisCacheModule,
  ) {}

  async create(createCartDto: CreateCartDto) {
    try {
      const newCart = await this.cacheManager.set('Carts', {
        user: createCartDto.userId,
        products: createCartDto.products,
        priceTotal: createCartDto.priceTotal,
      });
      console.log('add cache');

      return newCart;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const carts = await this.cacheManager.get('Carts');
      console.log('get cache');

      return carts;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      // const cart = await this.prismaService.cart.findUnique({
      //   where: {
      //     id: id,
      //   },
      // });
      // return cart;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    try {
      // const cart = await this.prismaService.cart.update({
      //   where: {
      //     id: id,
      //   },
      //   data: {
      //     quantity: updateCartDto.priceTotal,
      //     // products: updateCartDto.products,
      //     userId: updateCartDto.userId,
      //   },
      // });
      // return cart;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      // const cart = await this.prismaService.cart.delete({
      //   where: {
      //     id: id,
      //   },
      // });

      const delcart = await this.cacheManager.reset();

      return delcart;
    } catch (error) {
      return error;
    }
  }

  async cartExists(id: number) {
    // const cart = await this.prismaService.cart.findUnique({
    //   where: {
    //     id: id,
    //   },
    // });
    // return !!cart;

    return false;
  }
}
