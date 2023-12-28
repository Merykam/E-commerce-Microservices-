export class Category {
  name: string;
  image: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial) {
    Object.assign(this, partial);
  }
}
