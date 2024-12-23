export interface IVisitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}

export interface IComponent {
  accept(visitor: IVisitor): void;
}

// Forward declarations to resolve circular dependency
export class ConcreteComponentA implements IComponent {
  accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentA(this);
  }

  public exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}

export class ConcreteComponentB implements IComponent {
  accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
} 