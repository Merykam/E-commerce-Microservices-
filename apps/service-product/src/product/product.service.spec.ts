// import { Test, TestingModule } from '@nestjs/testing';
// import { ProductService } from './product.service';
// import { getModelToken } from '@nestjs/mongoose';
// import { Product } from './schemas/product.schema';

// describe('ProductService', () => {
//   let service: ProductService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         ProductService,
//         {
//           provide: getModelToken(Product.name),
//           useValue: {}, // Mock your mongoose model here if needed
//         },
//       ],
//     }).compile();

//     service = module.get<ProductService>(ProductService);
//   });

//   describe('findAll', () => {
//     it('should return an array of products', async () => {
//       // Mock mongoose model functions
//       const productModel = module.get(getModelToken(Product.name));
//       jest.spyOn(productModel, 'find').mockResolvedValueOnce([/* Mocked products */]);

//       const result = await service.findAll();
//       expect(result).toEqual([/* Mocked products */]);
//     });
//     // Add more test cases for other service functions
//   });
// });
