import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../config/config.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaSevice: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prismaSevice.product.create({
        data: {
          name: createProductDto.name,
          image: createProductDto.image,
          price: createProductDto.price,
          description: createProductDto.description,
          quantity: createProductDto.quantity,
          userId: createProductDto.userId,
          categoryId: createProductDto.categoryId,
          createdAt: createProductDto.createdAt,
          updatedAt: createProductDto.updatedAt,
        },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const products = await this.prismaSevice.product.findMany();

      if (products.length == 0) {
        return 'Products not found';
      }

      return products;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prismaSevice.product.findUnique({
        where: {
          id: id,
        },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prismaSevice.product.update({
        where: {
          id: id,
        },
        data: {
          name: updateProductDto.name,
          image: updateProductDto.image,
          price: updateProductDto.price,
          description: updateProductDto.description,
          quantity: updateProductDto.quantity,
          userId: updateProductDto.userId,
          categoryId: updateProductDto.categoryId,
          createdAt: updateProductDto.createdAt,
          updatedAt: updateProductDto.updatedAt,
        },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const product = await this.prismaSevice.product.delete({
        where: {
          id: id,
        },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  async productExists(id: number) {
    const product = await this.prismaSevice.product.findFirst({
      where: {
        id: id,
      },
    });

    return !!product;
  }
}
