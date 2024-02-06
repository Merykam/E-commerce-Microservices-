import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  readonly name: string;

  @IsNotEmpty({
    message: 'Image is required',
  })
  readonly image: string;

  @IsNotEmpty({
    message: 'Price is required',
  })
  readonly price: number;

  @IsNotEmpty({
    message: 'Description is required',
  })
  readonly description: string;

  @IsNotEmpty({
    message: 'Quantity is required',
  })
  readonly quantity: number;

  @IsNotEmpty({
    message: 'UserId is required',
  })
  readonly userId: number;

  @IsNotEmpty({
    message: 'CategoryId is required',
  })
  readonly categoryId: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
