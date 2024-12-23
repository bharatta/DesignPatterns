import { ConcreteCreator1, ConcreteCreator2 } from './implementation';

export const runFactoryExample = (): void => {
  console.log('Factory Pattern Example:');
  
  const creator1 = new ConcreteCreator1();
  const creator2 = new ConcreteCreator2();

  console.log(creator1.someOperation());
  console.log(creator2.someOperation());
}; 