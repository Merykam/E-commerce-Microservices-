import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

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
