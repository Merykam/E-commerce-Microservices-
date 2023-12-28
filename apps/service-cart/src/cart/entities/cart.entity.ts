export class Cart {
  userId: number;
  productId: number;
  priceTotal: number;
  constructor(userId: number, productId: number, priceTotal: number) {
    this.userId = userId;
    this.productId = productId;
    this.priceTotal = priceTotal;
  }

  // constructor(partial: Partial<Cart>) {
  //   Object.assign(this, partial);
  // }
}
