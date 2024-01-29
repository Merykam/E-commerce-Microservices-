import { IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty({
    message: 'User ID is required',
  })
  readonly userId: number;

  @IsNotEmpty({
    message: 'Products is required',
  })
  readonly products: Array<object>;

  @IsNotEmpty({
    message: 'Price total is required',
  })
  readonly priceTotal: number;
}
