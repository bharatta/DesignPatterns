import { Context, ConcreteStrategyA, ConcreteStrategyB } from './implementation';

export const runStrategyExample = (): void => {
  console.log('Strategy Pattern Example:');

  const context = new Context(new ConcreteStrategyA());
  console.log('Client: Strategy is set to normal sorting');
  context.doSomeBusinessLogic();

  console.log('\nClient: Strategy is set to reverse sorting');
  context.setStrategy(new ConcreteStrategyB());
  context.doSomeBusinessLogic();
}; 