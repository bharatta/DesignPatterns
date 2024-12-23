import { IAbstractClass } from './interfaces';

// Abstract Class
export abstract class AbstractClass implements IAbstractClass {
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1(): void {
    console.log('AbstractClass: I am doing the bulk of the work');
  }

  protected baseOperation2(): void {
    console.log('AbstractClass: But I let subclasses override some operations');
  }

  protected baseOperation3(): void {
    console.log('AbstractClass: But I am doing the bulk of the work anyway');
  }

  protected abstract requiredOperation1(): void;
  protected abstract requiredOperation2(): void;

  protected hook1(): void { }
  protected hook2(): void { }
}

// Concrete Classes
export class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log('ConcreteClass1: Implemented Operation1');
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass1: Implemented Operation2');
  }
}

export class ConcreteClass2 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log('ConcreteClass2: Implemented Operation1');
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass2: Implemented Operation2');
  }

  protected hook1(): void {
    console.log('ConcreteClass2: Overridden Hook1');
  }
} 