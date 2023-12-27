export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly userId: number;
  readonly categoryId: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
