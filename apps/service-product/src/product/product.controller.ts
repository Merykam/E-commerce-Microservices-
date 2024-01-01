import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
 
    
    @Get()
    async getAllProducts(): Promise<Product[]>{
        const products =  this.productService.findAll()

        return products
    }
    
}
