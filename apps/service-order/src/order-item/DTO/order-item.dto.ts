import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
} from 'class-validator';

export class OrderItemDTO {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsEmpty()
  orderId: number;
}
