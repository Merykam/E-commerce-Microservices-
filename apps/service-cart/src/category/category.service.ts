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
      console.log(error);
    }
  }

  findAll() {
    try {
      const categories = this.prismaService.category.findMany();

      return categories;
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
