import { ConcreteFactory1, ConcreteFactory2 } from './implementation';

export const runAbstractFactoryExample = (): void => {

  const factory1 = new ConcreteFactory1();
  const productA1 = factory1.createProductA();
  const productB1 = factory1.createProductB();

  console.log('\t' + productA1.operationA());
  console.log('\t' + productB1.operationB());
  console.log('\t' + productB1.collaborateWith(productA1));

  const factory2 = new ConcreteFactory2();
  const productA2 = factory2.createProductA();
  const productB2 = factory2.createProductB();

  console.log('\t' + productA2.operationA());
  console.log('\t' + productB2.operationB());
  console.log('\t' + productB2.collaborateWith(productA2));
}; 