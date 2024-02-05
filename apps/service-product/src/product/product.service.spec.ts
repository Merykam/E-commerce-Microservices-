import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getModelToken } from '@nestjs/mongoose';
import { Category, Product } from './schemas/product.schema';
import { ProductModule } from './product.module';
import { Types } from 'mongoose';

describe('ProductService', () => {
  beforeEach(() => {
    productModel = jest.fn().mockReturnValue({
      findAll: jest.fn(),
    });
    productService = new ProductService(productModel);
  });


  let productService: ProductService;
  let productModel: any;

const category: Category = Category.iphone;


const adminId: Types.ObjectId = new Types.ObjectId();

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const mockProducts = [
        { id: '1', name: 'Product 1', price: '10', description: 'Description 1', category: Category.iphone, adminId: adminId },
      ];

      jest.spyOn(productService, 'findAll').mockImplementation(() => Promise.resolve(mockProducts as any));

      const result = await productService.findAll();

      expect(result).toEqual(mockProducts);
    });
  });


});
