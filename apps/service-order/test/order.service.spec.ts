import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from '../src/order/order.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { InternalServerErrorException } from '@nestjs/common';
import { OrderDTO, Status, UpdateOrderDTO } from '../src/order/DTO';

describe('OrderService', () => {
  let orderService: OrderService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService, PrismaService],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getAllOrders', () => {
    it('should return all orders with user and order item data', async () => {
      const expectedOrders = [
        {
          id: 1,
          userId: 1,
          status: 'Pending',
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest
        .spyOn(prismaService.order, 'findMany')
        .mockResolvedValue(expectedOrders);

      const result = await orderService.getAllOrders();

      expect(result).toEqual(expectedOrders);
      expect(prismaService.order.findMany).toHaveBeenCalled();
    });

    it('should throw an error if retrieving orders fails', async () => {
      jest
        .spyOn(prismaService.order, 'findMany')
        .mockRejectedValue(new Error('Database error'));

      await expect(orderService.getAllOrders()).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(prismaService.order.findMany).toHaveBeenCalled();
    });
  });
  describe('updateOrder', () => {
    it('should update an existing order', async () => {
      const updateOrderDTO: UpdateOrderDTO = {
        status: Status.value2,
        paid: true,
      };
      const updatedOrder = {
        id: 1,
        userId: 1,
        status: 'In Delivery',
        paid: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(prismaService.order, 'update').mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrder('1', updateOrderDTO);

      expect(result).toEqual(updatedOrder);
      expect(prismaService.order.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateOrderDTO,
      });
    });

    it('should throw an error if updating the order fails', async () => {
      const updateOrderDTO: UpdateOrderDTO = {
        status: Status.value2,
        paid: true,
      };
      jest
        .spyOn(prismaService.order, 'update')
        .mockRejectedValue(new Error('Database error'));

      await expect(
        orderService.updateOrder('1', updateOrderDTO),
      ).rejects.toThrow(InternalServerErrorException);
      expect(prismaService.order.update).toHaveBeenCalled();
    });
  });
  describe('createOrder', () => {
    it('should create a new order', async () => {
      const orderDTO: OrderDTO = {
        userId: 1,
        status: Status.value1,
        orderItems: [1,2],
      };
      const insertedOrder = {
        id: 1,
        userId: 1,
        status: Status.value1,
        paid:false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest
        .spyOn(prismaService.order, 'create')
        .mockResolvedValue(insertedOrder);
      jest.spyOn(orderService, 'assignOrderIdToOrderItems').mockResolvedValue();

      const result = await orderService.createOrder(orderDTO);

      expect(result).toEqual(insertedOrder);
      expect(prismaService.order.create).toHaveBeenCalledWith({
        data: { userId: 1, status: Status.value1 },
      });
      expect(orderService.assignOrderIdToOrderItems).toHaveBeenCalledWith(
        insertedOrder.id,
        orderDTO.orderItems,
      );
    });

    it('should throw an error if creating the order fails', async () => {
      const orderDTO: OrderDTO = {
        userId: 1,
        status: Status.value1,
        orderItems: [1,2],
      };
      jest
        .spyOn(prismaService.order, 'create')
        .mockRejectedValue(new Error('Database error'));
      jest.spyOn(orderService, 'assignOrderIdToOrderItems').mockResolvedValue();

      await expect(orderService.createOrder(orderDTO)).rejects.toThrow(
        InternalServerErrorException,
      );
      expect(prismaService.order.create).toHaveBeenCalled();
      expect(orderService.assignOrderIdToOrderItems).not.toHaveBeenCalled();
    });
  });

});
