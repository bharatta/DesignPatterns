import { 
  ConcreteComponent, 
  ConcreteDecoratorA, 
  ConcreteDecoratorB 
} from './implementation';

export const runDecoratorExample = (): void => {

  // Create a simple component
  const simple = new ConcreteComponent();
  console.log('\tClient: I\'ve got a simple component:');
  console.log('\tRESULT: ' + simple.operation());

  // Decorate it with Decorator A
  const decorator1 = new ConcreteDecoratorA(simple);
  console.log('\n\tClient: Now I\'ve got a decorated component A:');
  console.log('\tRESULT: ' + decorator1.operation());
  console.log('\tEXTRA: ' + decorator1.extraOperation());

  // Decorate it with Decorator B
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log('\n\tClient: Now I\'ve got a decorated component B:');
  console.log('\tRESULT: ' + decorator2.operation());
  console.log('\tADDITIONAL: ' + decorator2.additionalBehavior());
}; 