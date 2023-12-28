import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const category = await this.categoryService.create(createCategoryDto);

      return res.status(HttpStatus.CREATED).json({
        message: 'Category created successfully',
        data: category,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Category not created',
        data: error,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const categories = await this.categoryService.findAll();

      return res.status(HttpStatus.OK).json({
        message: 'Categories found',
        data: categories,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Categories not found',
        data: error,
      });
    }
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Res() res: Response,
  ) {
    try {
      const category = await this.categoryService.findOne(id);

      if (!category) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Category not found',
          data: category,
        });
      }

      return res.status(HttpStatus.OK).json({
        message: 'Category found',
        data: category,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Category not found',
        data: error,
      });
    }
  }

  @Patch(':id')
  async update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const check = await this.categoryService.categoryExists(+id);
      if (!check) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Category not found',
          data: null,
        });
      }

      const category = await this.categoryService.update(
        +id,
        updateCategoryDto,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Category updated successfully',
        data: category,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Category not found',
        data: error,
      });
    }
  }

  @Delete(':id')
  async remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Res() res: Response,
  ) {
    try {
      const check = await this.categoryService.categoryExists(+id);
      if (!check) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Category not found',
          data: null,
        });
      }

      const category = await this.categoryService.remove(+id);
      return res.status(HttpStatus.OK).json({
        message: 'Category deleted successfully',
        data: category,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Category not found',
        data: error,
      });
    }
  }
}
