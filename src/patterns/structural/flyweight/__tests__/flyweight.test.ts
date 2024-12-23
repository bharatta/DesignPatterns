import { FlyweightFactory } from '../implementation';

describe('Flyweight Pattern', () => {
  let factory: FlyweightFactory;

  beforeEach(() => {
    factory = new FlyweightFactory([
      ['Chevrolet', 'Camaro2018', 'pink'],
      ['Mercedes Benz', 'C300', 'black']
    ]);
  });

  it('should reuse existing flyweight for same state', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    const flyweight1 = factory.getFlyweight(['Chevrolet', 'Camaro2018', 'pink']);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'FlyweightFactory: Reusing existing flyweight.'
    );
    
    consoleSpy.mockRestore();
  });

  it('should create new flyweight for new state', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    const flyweight = factory.getFlyweight(['BMW', 'X6', 'white']);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'FlyweightFactory: Can\'t find a flyweight, creating new one.'
    );
    
    consoleSpy.mockRestore();
  });

  it('should correctly perform operations with unique state', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    const flyweight = factory.getFlyweight(['Chevrolet', 'Camaro2018', 'pink']);
    flyweight.operation('ABC123');
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'Flyweight: Displaying shared (["Chevrolet","Camaro2018","pink"]) and unique ("ABC123") state.'
    );
    
    consoleSpy.mockRestore();
  });
}); 