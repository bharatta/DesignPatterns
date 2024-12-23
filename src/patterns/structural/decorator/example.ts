import { 
  ConcreteComponent, 
  ConcreteDecoratorA, 
  ConcreteDecoratorB 
} from './implementation';

export const runDecoratorExample = (): void => {
  console.log('Decorator Pattern Example:');

  // Create a simple component
  const simple = new ConcreteComponent();
  console.log('Client: I\'ve got a simple component:');
  console.log(`RESULT: ${simple.operation()}`);

  // Decorate it with Decorator A
  const decorator1 = new ConcreteDecoratorA(simple);
  console.log('\nClient: Now I\'ve got a decorated component A:');
  console.log(`RESULT: ${decorator1.operation()}`);
  console.log(`EXTRA: ${decorator1.extraOperation()}`);

  // Decorate it with Decorator B
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log('\nClient: Now I\'ve got a decorated component B:');
  console.log(`RESULT: ${decorator2.operation()}`);
  console.log(`ADDITIONAL: ${decorator2.additionalBehavior()}`);
}; 