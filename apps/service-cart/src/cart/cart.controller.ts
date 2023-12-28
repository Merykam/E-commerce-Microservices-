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
import { Response } from 'express';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Res() res: Response, @Body() createCartDto: CreateCartDto) {
    try {
      this.cartService.create(createCartDto).then((data) => {
        res.status(HttpStatus.CREATED).json({
          message: 'Cart created',
          data: data,
        });
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not created',
        data: error,
      });
    }
  }

  @Get()
  findAll(@Res() res: Response) {
    try {
      this.cartService.findAll().then((data) => {
        res.status(HttpStatus.OK).json({
          message: 'Carts found',
          data: data,
        });
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Carts not found',
        data: error,
      });
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Res() res: Response,
  ) {
    try {
      this.cartService.findOne(+id).then((data) => {
        res.status(HttpStatus.OK).json({
          message: 'Cart found',
          data: data,
        });
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Cart not found',
        data: error,
      });
    }
  }

  @Patch(':id')
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.cartService.remove(+id);
  }
}
