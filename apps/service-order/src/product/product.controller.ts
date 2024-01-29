import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductDTO } from './DTO';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  @Post('')
  createProduct(@Body() data: ProductDTO) {
    console.log(data);
    return this.ProductService.createProduct(data);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() data: ProductDTO) {
    return this.ProductService.updateProduct(id, data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.ProductService.deleteProduct(id);
  }
}
