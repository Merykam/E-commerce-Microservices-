export class Product {
  name: string;
  price: number;
  description: string;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
