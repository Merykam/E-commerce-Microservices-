import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty({
    message: 'User ID is required',
  })
  readonly userId: number;

  @IsNotEmpty({
    message: 'Product ID is required',
  })
  readonly productId: number;

  @IsNotEmpty({
    message: 'Price total is required',
  })
  readonly priceTotal: number;
}
