import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDTO } from './DTO';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: ProductDTO) {
    const insertedProduct = await this.prisma.product.create({data});
    return insertedProduct;
  }

  async updateProduct(id: string, data: ProductDTO) {
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: {
        price: data.price,
        name: data.name,
      },
    });
    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.prisma.product.delete({
      where: { id },
    });
    return deletedProduct;
  }
}
