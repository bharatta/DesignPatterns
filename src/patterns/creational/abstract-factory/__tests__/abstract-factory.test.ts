import { ConcreteFactory1, ConcreteFactory2 } from '../implementation';

describe('Abstract Factory Pattern', () => {
  it('should create and collaborate products using Factory1', () => {
    const factory1 = new ConcreteFactory1();
    const productA = factory1.createProductA();
    const productB = factory1.createProductB();

    expect(productA.operationA()).toBe('Product A1');
    expect(productB.operationB()).toBe('Product B1');
    expect(productB.collaborateWith(productA)).toBe('B1 collaborating with Product A1');
  });

  it('should create and collaborate products using Factory2', () => {
    const factory2 = new ConcreteFactory2();
    const productA = factory2.createProductA();
    const productB = factory2.createProductB();

    expect(productA.operationA()).toBe('Product A2');
    expect(productB.operationB()).toBe('Product B2');
    expect(productB.collaborateWith(productA)).toBe('B2 collaborating with Product A2');
  });
}); 