import { IComponent, IDecorator } from './interfaces';

// Concrete Component
export class ConcreteComponent implements IComponent {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

// Base Decorator
export abstract class Decorator implements IDecorator {
  constructor(public component: IComponent) {}

  public operation(): string {
    return this.component.operation();
  }
}

// Concrete Decorators
export class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }

  public extraOperation(): string {
    return 'Additional operation A';
  }
}

export class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }

  public additionalBehavior(): string {
    return 'Additional operation B';
  }
} 