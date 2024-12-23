import { IProductA, IProductB, IAbstractFactory } from './interfaces';

class ConcreteProductA1 implements IProductA {
  operationA(): string {
    return 'Product A1';
  }
}

class ConcreteProductA2 implements IProductA {
  operationA(): string {
    return 'Product A2';
  }
}

class ConcreteProductB1 implements IProductB {
  operationB(): string {
    return 'Product B1';
  }

  collaborateWith(collaborator: IProductA): string {
    return `B1 collaborating with ${collaborator.operationA()}`;
  }
}

class ConcreteProductB2 implements IProductB {
  operationB(): string {
    return 'Product B2';
  }

  collaborateWith(collaborator: IProductA): string {
    return `B2 collaborating with ${collaborator.operationA()}`;
  }
}

export class ConcreteFactory1 implements IAbstractFactory {
  createProductA(): IProductA {
    return new ConcreteProductA1();
  }

  createProductB(): IProductB {
    return new ConcreteProductB1();
  }
}

export class ConcreteFactory2 implements IAbstractFactory {
  createProductA(): IProductA {
    return new ConcreteProductA2();
  }

  createProductB(): IProductB {
    return new ConcreteProductB2();
  }
} 