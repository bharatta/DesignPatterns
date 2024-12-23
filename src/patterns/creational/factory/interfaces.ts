export interface IProduct {
  operation(): string;
}

export interface ICreator {
  createProduct(): IProduct;
  someOperation(): string;
} 