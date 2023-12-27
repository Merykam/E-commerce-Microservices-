import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../config/config.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaSevice: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    try {
      const product = this.prismaSevice.product.create({
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
      throw new Error('Failed to create product');
    }
  }

  findAll() {
    try {
      const products = this.prismaSevice.product.findMany();
      return products;
    } catch (error) {
      throw new Error('Failed to find products');
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prismaSevice.product.findUnique({
        where: {
          id: id,
        },
      });

      if (!product) {
        return 'product not found';
      }

      return product;
    } catch (error) {
      throw new Error('Failed to find products');
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = this.prismaSevice.product.update({
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
    } catch (error) {}
  }

  remove(id: number) {
    try {
      const product = this.prismaSevice.product.delete({
        where: {
          id: id,
        },
      });

      return product;
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  }
}
