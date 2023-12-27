export class Product {
  name: string;
  price: number;
  description: string;
  quantity: number;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
