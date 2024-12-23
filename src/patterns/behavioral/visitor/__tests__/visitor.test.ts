import { 
  ConcreteComponentA, 
  ConcreteComponentB, 
  ConcreteVisitor1, 
  ConcreteVisitor2 
} from '../implementation';

describe('Visitor Pattern', () => {
  let componentA: ConcreteComponentA;
  let componentB: ConcreteComponentB;
  let visitor1: ConcreteVisitor1;
  let visitor2: ConcreteVisitor2;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    componentA = new ConcreteComponentA();
    componentB = new ConcreteComponentB();
    visitor1 = new ConcreteVisitor1();
    visitor2 = new ConcreteVisitor2();
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should allow visitor1 to visit componentA', () => {
    componentA.accept(visitor1);
    expect(consoleSpy).toHaveBeenCalledWith('A + ConcreteVisitor1');
  });

  it('should allow visitor1 to visit componentB', () => {
    componentB.accept(visitor1);
    expect(consoleSpy).toHaveBeenCalledWith('B + ConcreteVisitor1');
  });

  it('should allow visitor2 to visit componentA', () => {
    componentA.accept(visitor2);
    expect(consoleSpy).toHaveBeenCalledWith('A + ConcreteVisitor2');
  });

  it('should allow visitor2 to visit componentB', () => {
    componentB.accept(visitor2);
    expect(consoleSpy).toHaveBeenCalledWith('B + ConcreteVisitor2');
  });

  it('should work with a collection of components', () => {
    const components = [componentA, componentB];
    components.forEach(component => component.accept(visitor1));

    expect(consoleSpy).toHaveBeenCalledWith('A + ConcreteVisitor1');
    expect(consoleSpy).toHaveBeenCalledWith('B + ConcreteVisitor1');
  });
}); 