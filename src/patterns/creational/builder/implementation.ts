import { IBuilder, IProduct } from './interfaces';

export class Product implements IProduct {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`\t\tProduct parts: ${this.parts.join(', ')}`);
  }
}

export class ConcreteBuilder implements IBuilder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public buildStepA(): void {
    this.product.parts.push('PartA');
  }

  public buildStepB(): void {
    this.product.parts.push('PartB');
  }

  public buildStepC(): void {
    this.product.parts.push('PartC');
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder!: IBuilder;

  public setBuilder(builder: IBuilder): void {
    this.builder = builder;
  }

  public buildMinimalProduct(): void {
    this.builder.buildStepA();
  }

  public buildFullProduct(): void {
    this.builder.buildStepA();
    this.builder.buildStepB();
    this.builder.buildStepC();
  }
} 