import {
  IsInt,
  IsNotEmpty,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsBoolean,
  IsEmpty,
  IsOptional,
} from 'class-validator';

enum Status {
  value1 = 'Pending',
  value2 = 'In Delivery',
  value3 = 'Delivered',
}

export class OrderDTO {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsEnum(Status)
  status: Status;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  orderItems: number[];
}

export class UpdateOrderDTO {
  @IsEnum(Status)
  @IsOptional()
  status: Status;

  @IsBoolean()
  @IsOptional()
  paid: boolean;
}
