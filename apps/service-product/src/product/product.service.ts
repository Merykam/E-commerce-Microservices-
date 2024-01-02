import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import * as mongoose from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

    async findById(id: string): Promise<Product>{
        const product = await this.productModel.findById(id);
        if(!product){
            throw new NotFoundException('Product not found')
        }
        return product;

    }
    async updateById(id: string, product:UpdateProductDto): Promise<Product>{
        return await this.productModel.findByIdAndUpdate(id, product, {
            new:true,
            runValidators:true,
        });
    }
    async delete(id:string){
        return await this.productModel.deleteOne({_id:id});

    }
    async searchP(criteria: any): Promise<Product[]> {
        console.log(criteria);
        
        
        const products = await this.productModel.find(criteria);
        return products;
    }
}
