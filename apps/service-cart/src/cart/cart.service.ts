import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../config/config.service';

@Injectable()
export class CartService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createCartDto: CreateCartDto) {
    try {
      const cart = await this.prismaService.cart.create({
        data: {
          quantity: createCartDto.priceTotal,
          productId: createCartDto.productId,
          userId: createCartDto.userId,
        },
      });

      return cart;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const carts = await this.prismaService.cart.findMany();

      if (carts.length == 0) {
        return 'Carts not found';
      }
      return carts;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const cart = await this.prismaService.cart.findUnique({
        where: {
          id: id,
        },
      });

      if (!cart) {
        return 'Cart not found';
      }
      return cart;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    try {
      const cart = await this.prismaService.cart.update({
        where: {
          id: id,
        },
        data: {
          quantity: updateCartDto.priceTotal,
          productId: updateCartDto.productId,
          userId: updateCartDto.userId,
        },
      });

      if (!cart) {
        return 'Cart not found';
      }
      
      return cart;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const cart = await this.prismaService.cart.delete({
        where: {
          id: id,
        },
      });

      if (!cart) {
        return 'Cart not found';
      }
      return cart;
    } catch (error) {
      return error;
    }
  }
}
