import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCartController } from './service-cart.controller';
import { ServiceCartService } from './service-cart.service';

describe('ServiceCartController', () => {
  let serviceCartController: ServiceCartController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceCartController],
      providers: [ServiceCartService],
    }).compile();

    serviceCartController = app.get<ServiceCartController>(ServiceCartController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceCartController.getHello()).toBe('Hello World!');
    });
  });
});
