import { Context, ConcreteStateA } from './implementation';

export const runStateExample = (): void => {
  
  const context = new Context(new ConcreteStateA());
  
  console.log('\n\tClient: Execute request1');
  context.request1();
  
  console.log('\n\tClient: Execute request2');
  context.request2();
}; 