export class CreateProductDto {
  readonly name: string;
  readonly image: string;
  readonly price: number;
  readonly description: string;
  readonly quantity: number;
  readonly userId: number;
  readonly categoryId: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
