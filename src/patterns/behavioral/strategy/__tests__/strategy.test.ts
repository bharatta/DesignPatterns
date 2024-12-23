import { Context, ConcreteStrategyA, ConcreteStrategyB } from '../implementation';

describe('Strategy Pattern', () => {
  let context: Context;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should sort in ascending order with ConcreteStrategyA', () => {
    context = new Context(new ConcreteStrategyA());
    context.doSomeBusinessLogic();

    expect(consoleSpy).toHaveBeenCalledWith('Context: Sorting data using the strategy');
    expect(consoleSpy).toHaveBeenCalledWith('a,b,c,d,e');
  });

  it('should sort in reverse order with ConcreteStrategyB', () => {
    context = new Context(new ConcreteStrategyB());
    context.doSomeBusinessLogic();

    expect(consoleSpy).toHaveBeenCalledWith('Context: Sorting data using the strategy');
    expect(consoleSpy).toHaveBeenCalledWith('e,d,c,b,a');
  });

  it('should allow changing strategies at runtime', () => {
    context = new Context(new ConcreteStrategyA());
    context.doSomeBusinessLogic();
    
    context.setStrategy(new ConcreteStrategyB());
    context.doSomeBusinessLogic();

    expect(consoleSpy).toHaveBeenCalledWith('a,b,c,d,e');
    expect(consoleSpy).toHaveBeenCalledWith('e,d,c,b,a');
  });
}); 