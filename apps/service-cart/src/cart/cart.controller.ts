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
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

// @UseInterceptors(CacheInterceptor)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @CacheKey('cart')
  // @CacheTTL(30)
  async create(@Res() res: Response, @Body() createCartDto: CreateCartDto) {
    try {
      const cart = await this.cartService.create(createCartDto);

      return res.status(HttpStatus.CREATED).json({
        message: 'Cart created successfully',
        data: cart,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not created',
        data: error,
      });
    }
  }

  @Get()
  // @CacheKey('cart')
  async findAll(@Res() res: Response) {
    try {
      const carts = await this.cartService.findAll();

      return res.status(HttpStatus.OK).json({
        message: 'Carts found',
        data: carts,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Carts not found',
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
      const cart = await this.cartService.findOne(+id);
      return res.status(HttpStatus.OK).json({
        message: 'Cart found',
        data: cart,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not found',
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
    @Body() updateCartDto: UpdateCartDto,
    @Res() res: Response,
  ) {
    try {
      const check = await this.cartService.cartExists(+id);
      if (!check) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Cart not found',
          data: null,
        });
      }
      const cart = await this.cartService.update(+id, updateCartDto);
      return res.status(HttpStatus.OK).json({
        message: 'Cart updated successfully',
        data: cart,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not updated',
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
      const cart = await this.cartService.remove(id);

      return res.status(HttpStatus.OK).json({
        message: 'Cart deleted successfully',
        data: cart,
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not deleted',
        data: error,
      });
    }
  }
}
