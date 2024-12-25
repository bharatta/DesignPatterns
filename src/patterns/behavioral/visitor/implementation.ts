import { 
  IVisitor, 
  IComponent,
  ConcreteComponentA,
  ConcreteComponentB 
} from './interfaces';

export { ConcreteComponentA, ConcreteComponentB };

export class ConcreteVisitor1 implements IVisitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log('\t\t',`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log('\t\t',`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}

export class ConcreteVisitor2 implements IVisitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log('\t\t',`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log('\t\t',`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
  }
} 