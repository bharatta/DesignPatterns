import { 
  ConcreteComponentA, 
  ConcreteComponentB, 
  ConcreteVisitor1, 
  ConcreteVisitor2 
} from './implementation';

export const runVisitorExample = (): void => {
 
  const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
  ];

  console.log('\tThe client code works with all visitors via the base Visitor interface:');
  const visitor1 = new ConcreteVisitor1();
  components.forEach(component => component.accept(visitor1));

  console.log('\n\tIt allows the same client code to work with different types of visitors:');
  const visitor2 = new ConcreteVisitor2();
  components.forEach(component => component.accept(visitor2));
}; 