import { ConcreteCreator1, ConcreteCreator2 } from '../implementation';

describe('Factory Pattern', () => {
  it('should create and operate ConcreteProduct1', () => {
    const creator1 = new ConcreteCreator1();
    expect(creator1.someOperation()).toBe('Creator1: Result of ConcreteProduct1');
  });

  it('should create and operate ConcreteProduct2', () => {
    const creator2 = new ConcreteCreator2();
    expect(creator2.someOperation()).toBe('Creator2: Result of ConcreteProduct2');
  });
}); 