import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';


describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrder', () => {
    it('should return the order with the given orderId', async () => {
      // Arrange
      const orderId = 1;

      // Act
      const order = await service.getOrder(orderId);

      // Assert
      expect(order).toBeDefined();
      // Add more assertions based on the expected behavior of the getOrder method
    });

    it('should throw an error if the order does not exist', async () => {
      // Arrange
      const orderId = 12;

      // Act and Assert
      await expect(service.getOrder(orderId)).rejects.toThrow();
    });
  });

  describe('findPaymentByOrderId', () => {
    it('should return the payment with the given orderId', async () => {
      // Arrange
      const orderId = 1;

      // Act
      const payment = await service.findPaymentByOrderId(orderId);

      // Assert
      expect(payment).toBeDefined();
      // Add more assertions based on the expected behavior of the findPaymentByOrderId method
    });

    // it('should throw an error if the payment does not exist', async () => {
    //   // Arrange
    //   const orderId = 12;

    //   // Act and Assert
    //   await expect(service.findPaymentByOrderId(orderId)).rejects.toThrow();
    // });
  });

  describe('createPayment', () => {
    it('should log an error if an exception occurs during payment creation', async () => {
      // Arrange
      const order = { id: 1, cart: { totalprice: 100 } };
      const methodPayment = 'credit card';
      const errorMessage = 'An error occurred during payment creation';
    
      // Mock the Prisma payment.create method to throw an error
      jest.spyOn(service.prisma.payment, 'create').mockRejectedValueOnce(new Error(errorMessage));
    
      // Spy on the console.log method
      const consoleSpy = jest.spyOn(console, 'log');
    
      // Act
      await service.createPayment(order, methodPayment);
    
      // Assert
      expect(consoleSpy).toMatchSnapshot();
    });
    

    it('should log an error if an exception occurs during payment creation', async () => {
      // Arrange
      const order = { id: 1, cart: { totalprice: 100 } };
      const methodPayment = 'credit card';
      const errorMessage = 'An error occurred during payment creation';

      // Mock the Prisma payment.create method to throw an error
      jest.spyOn(service.prisma.payment, 'create').mockRejectedValueOnce(new Error(errorMessage));

      // Spy on the console.log method
      const consoleSpy = jest.spyOn(console, 'log');

      // Act
      await service.createPayment(order, methodPayment);

      // Assert
      expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    });
  });
});