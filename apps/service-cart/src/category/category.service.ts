import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../config/config.service';

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

      if (categories.length == 0) {
        return 'Categories not found';
      }

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

      if (!category) {
        return 'Category not found';
      }

      return category;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
