import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import * as mongoose from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel : mongoose.Model<Product>
    ){}

    async findAll(): Promise<Product[]>{
        const products = await this.productModel.find();
        return products
    }
    async create(product:CreateProductDto): Promise<Product>{
        const res = await this.productModel.create(product)
        return res;
    }
}
