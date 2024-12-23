import { ConcreteClass1, ConcreteClass2 } from '../implementation';

describe('Template Method Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should execute template method for ConcreteClass1', () => {
    const class1 = new ConcreteClass1();
    class1.templateMethod();

    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: I am doing the bulk of the work');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteClass1: Implemented Operation1');
    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: But I let subclasses override some operations');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteClass1: Implemented Operation2');
    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: But I am doing the bulk of the work anyway');
  });

  it('should execute template method for ConcreteClass2 with hook', () => {
    const class2 = new ConcreteClass2();
    class2.templateMethod();

    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: I am doing the bulk of the work');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteClass2: Implemented Operation1');
    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: But I let subclasses override some operations');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteClass2: Overridden Hook1');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteClass2: Implemented Operation2');
    expect(consoleSpy).toHaveBeenCalledWith('AbstractClass: But I am doing the bulk of the work anyway');
  });

  it('should maintain the correct order of operations', () => {
    const class1 = new ConcreteClass1();
    class1.templateMethod();

    const calls = consoleSpy.mock.calls.map(call => call[0]);
    expect(calls).toEqual([
      'AbstractClass: I am doing the bulk of the work',
      'ConcreteClass1: Implemented Operation1',
      'AbstractClass: But I let subclasses override some operations',
      'ConcreteClass1: Implemented Operation2',
      'AbstractClass: But I am doing the bulk of the work anyway'
    ]);
  });
}); 