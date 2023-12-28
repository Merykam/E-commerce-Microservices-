import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;
  @IsNotEmpty({
    message: 'Image is required',
  })
  image: string;

  @IsNotEmpty({
    message: 'UserId is required',
  })
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
