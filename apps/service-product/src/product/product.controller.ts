import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
 
    
    @Get()
    async getAllProducts(): Promise<Product[]>{
        const products =  this.productService.findAll()

        return products
    }

    @Post('new')
    async createProduct(@Body() 
    product:CreateProductDto,): Promise<Product>{
        return this.productService.create(product)
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


    // @Post('new')
    // async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    //     // Convert CreateProductDto to Product
    //     const product: Product = {
    //         name: createProductDto.name,
    //         description: createProductDto.description,
    //         price: createProductDto.price,
    //         category: createProductDto.category,
    //     };

    //     return this.productService.create(product);
    // }
}
