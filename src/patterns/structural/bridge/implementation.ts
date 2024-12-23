import { IAbstraction, IImplementation } from './interfaces';

// Concrete Implementations
export class ConcreteImplementationA implements IImplementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on platform A.';
  }
}

export class ConcreteImplementationB implements IImplementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on platform B.';
  }
}

// Abstraction
export class Abstraction implements IAbstraction {
  protected implementation: IImplementation;

  constructor(implementation: IImplementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

// Extended Abstraction
export class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
} 