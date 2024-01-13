import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Query, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AdminService } from 'apps/service-product/admin/admin.service';
import { Response } from 'express';


@Controller('api/product')
export class ProductController {
    constructor(private productService:ProductService, private adminService:AdminService){}
 
 
    @Get('search')
    async searchProducts(@Query() query: any): Promise<Product[]> {
        console.log("hello");
        
        console.log(query);
        const products = await this.productService.searchP(query);
        return products;
    }
    
    @Get()
    async getAllProducts(@Res() res: Response): Promise<any> {
    try {
      const products = await this.productService.findAll();
      return res.status(HttpStatus.OK).json({
        data: products,
      });
    } catch (error) {
      console.error('Error retrieving products:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
  }
    @Post('new')
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        const admin1 = createProductDto.adminId;
        const findAd = await this.adminService.findAdmin(admin1); 
    
        if (!findAd) {
         
            throw new NotFoundException('Admin not found');
        }
    
       
    
        const product: CreateProductDto = {
            name: createProductDto.name,
            description: createProductDto.description,
            price: createProductDto.price,
            category: createProductDto.category,
            adminId: findAd._id
        };
    
        return this.productService.create(product);
    }
    

  
 
    @Get(':id')
    async getProduct(@Param('id')
    id: string): Promise<Product>{
        const product =  this.productService.findById(id)

        return product
    }
    @Post(':id')
    async updateProduct(
        @Param('id')
        id: string,
        @Body() 
    product:UpdateProductDto,): Promise<Product>{
        return this.productService.updateById(id, product)
    }
    @Delete(':id')
    async deleteProduct(@Param('id')
    id: string){
        const deletedProduct = this.productService.delete(id);
        return deletedProduct;
    }
   
    


  
}
