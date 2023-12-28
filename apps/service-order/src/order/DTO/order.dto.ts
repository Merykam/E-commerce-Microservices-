import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
} from 'class-validator';

enum Status {
  value1 = 'Pending',
  value2 = 'In Delivery',
  value3 = 'Delivered',
}

export class OrderDTO {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsNotEmpty()
  productId: string;
}
