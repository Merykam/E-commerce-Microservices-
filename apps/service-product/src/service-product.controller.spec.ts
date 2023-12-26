import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProductController } from './service-product.controller';
import { ServiceProductService } from './service-product.service';

describe('ServiceProductController', () => {
  let serviceProductController: ServiceProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProductController],
      providers: [ServiceProductService],
    }).compile();

    serviceProductController = app.get<ServiceProductController>(ServiceProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceProductController.getHello()).toBe('Hello World!');
    });
  });
});
