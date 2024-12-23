import { IProduct, ICreator } from './interfaces';

class ConcreteProduct1 implements IProduct {
  operation(): string {
    return 'Result of ConcreteProduct1';
  }
}

class ConcreteProduct2 implements IProduct {
  operation(): string {
    return 'Result of ConcreteProduct2';
  }
}

export class ConcreteCreator1 implements ICreator {
  createProduct(): IProduct {
    return new ConcreteProduct1();
  }

  someOperation(): string {
    const product = this.createProduct();
    return `Creator1: ${product.operation()}`;
  }
}

export class ConcreteCreator2 implements ICreator {
  createProduct(): IProduct {
    return new ConcreteProduct2();
  }

  someOperation(): string {
    const product = this.createProduct();
    return `Creator2: ${product.operation()}`;
  }
} 