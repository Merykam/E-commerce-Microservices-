import { Test, TestingModule } from '@nestjs/testing';
import { ServicePaymentController } from './service-payment.controller';
import { ServicePaymentService } from './service-payment.service';

describe('ServicePaymentController', () => {
  let servicePaymentController: ServicePaymentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicePaymentController],
      providers: [ServicePaymentService],
    }).compile();

    servicePaymentController = app.get<ServicePaymentController>(ServicePaymentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicePaymentController.getHello()).toBe('Hello World!');
    });
  });
});
