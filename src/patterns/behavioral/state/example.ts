import { Context, ConcreteStateA } from './implementation';

export const runStateExample = (): void => {
  console.log('State Pattern Example:');

  const context = new Context(new ConcreteStateA());
  
  console.log('\nClient: Execute request1');
  context.request1();
  
  console.log('\nClient: Execute request2');
  context.request2();
}; 