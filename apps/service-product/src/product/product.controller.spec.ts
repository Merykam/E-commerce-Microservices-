import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

describe('ProductController', () => {
  let controller: ProductController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: getModelToken(Product.name),
          useValue: {}, // Mock your mongoose model here if needed
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  // describe('getAllProducts', () => {
  //   it('should return an array of products', async () => {
  //     // Mock ProductService function
  //     const productService = module.get<ProductService>(ProductService);
  //     jest.spyOn(productService, 'findAll').mockResolvedValueOnce([/* Mocked products */]);

  //     const response = await controller.getAllProducts({} as any);
  //     expect(response).toEqual({
  //       data: [/* Mocked products */],
  //     });
  //   });

  

  // Your test cases here
// })

})
