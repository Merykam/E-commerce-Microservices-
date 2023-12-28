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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() res: Response,
  ) {
    try {
      const product = await this.productService.create(createProductDto);

      return res.status(HttpStatus.CREATED).json({
        message: 'Product created successfully',
        data: product,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Product not created',
        data: error,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const products = await this.productService.findAll();

      return res.status(HttpStatus.OK).json({
        message: 'Products found',
        data: products,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Products not found',
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
      const product = await this.productService.findOne(+id);

      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Product not found',
        data: product,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Product not found',
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
    @Body() updateProductDto: UpdateProductDto,
    @Res() res: Response,
  ) {
    try {
      const check = await this.productService.productExists(+id);

      if (!check) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Product not found',
          data: null,
        });
      }

      const product = await this.productService.update(+id, updateProductDto);

      return res.status(HttpStatus.OK).json({
        message: 'Product updated successfully',
        data: product,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Product not updated',
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
      const check = await this.productService.productExists(+id);

      if (!check) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Product not found',
          data: null,
        });
      }

      const product = await this.productService.remove(+id);

      return res.status(HttpStatus.OK).json({
        message: 'Product deleted successfully',
        data: product,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Product not deleted',
        data: error,
      });
    }
  }
}
