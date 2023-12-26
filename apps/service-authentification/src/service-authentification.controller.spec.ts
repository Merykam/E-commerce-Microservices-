import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAuthentificationController } from './service-authentification.controller';
import { ServiceAuthentificationService } from './service-authentification.service';

describe('ServiceAuthentificationController', () => {
  let serviceAuthentificationController: ServiceAuthentificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiceAuthentificationController],
      providers: [ServiceAuthentificationService],
    }).compile();

    serviceAuthentificationController = app.get<ServiceAuthentificationController>(ServiceAuthentificationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviceAuthentificationController.getHello()).toBe('Hello World!');
    });
  });
});
