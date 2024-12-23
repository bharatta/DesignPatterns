import { ConcreteFactory1, ConcreteFactory2 } from './implementation';

export const runAbstractFactoryExample = (): void => {
  console.log('Abstract Factory Pattern Example:');

  const factory1 = new ConcreteFactory1();
  const productA1 = factory1.createProductA();
  const productB1 = factory1.createProductB();

  console.log(productA1.operationA());
  console.log(productB1.operationB());
  console.log(productB1.collaborateWith(productA1));

  const factory2 = new ConcreteFactory2();
  const productA2 = factory2.createProductA();
  const productB2 = factory2.createProductB();

  console.log(productA2.operationA());
  console.log(productB2.operationB());
  console.log(productB2.collaborateWith(productA2));
}; 