export class Cart {
  userId: string;
  productId: string;
  priceTotal: number;
  constructor(userId: string, productId: string, priceTotal: number) {
    this.userId = userId;
    this.productId = productId;
    this.priceTotal = priceTotal;
  }

  // constructor(partial: Partial<Cart>) {
  //   Object.assign(this, partial);
  // }
}
