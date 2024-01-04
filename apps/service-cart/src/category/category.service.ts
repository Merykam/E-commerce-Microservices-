import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../config/database/config.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.prismaService.category.create({
        data: {
          ...createCategoryDto,
        },
      });

      return category;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const categories = await this.prismaService.category.findMany();
      return categories;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.prismaService.category.findFirst({
        where: {
          id: id,
        },
      });

      return category;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.prismaService.category.update({
        where: {
          id: id,
        },
        data: {
          name: updateCategoryDto.name,
          image: updateCategoryDto.image,
          userId: updateCategoryDto.userId,
        },
      });

      return category;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const category = await this.prismaService.category.delete({
        where: {
          id: id,
        },
      });

      return category;
    } catch (error) {
      return error;
    }
  }

  async categoryExists(id: number) {
    const category = await this.prismaService.category.findFirst({
      where: {
        id: id,
      },
    });

    return !!category;
  }
}
