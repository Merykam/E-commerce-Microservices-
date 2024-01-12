import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString, IsDecimal, IsNumber } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
