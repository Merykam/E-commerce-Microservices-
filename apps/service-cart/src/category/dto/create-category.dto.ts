export class CreateCategoryDto {
  name: string;
  image: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<CreateCategoryDto>) {
    Object.assign(this, partial);
  }
}
