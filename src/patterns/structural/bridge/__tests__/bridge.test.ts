import {
  Abstraction,
  ExtendedAbstraction,
  ConcreteImplementationA,
  ConcreteImplementationB
} from '../implementation';

describe('Bridge Pattern', () => {
  it('should work with ConcreteImplementationA', () => {
    const implementation = new ConcreteImplementationA();
    const abstraction = new Abstraction(implementation);
    
    expect(abstraction.operation()).toBe(
      'Abstraction: Base operation with:\n' +
      'ConcreteImplementationA: Here\'s the result on platform A.'
    );
  });

  it('should work with ConcreteImplementationB', () => {
    const implementation = new ConcreteImplementationB();
    const abstraction = new Abstraction(implementation);
    
    expect(abstraction.operation()).toBe(
      'Abstraction: Base operation with:\n' +
      'ConcreteImplementationB: Here\'s the result on platform B.'
    );
  });

  it('should work with ExtendedAbstraction', () => {
    const implementation = new ConcreteImplementationA();
    const abstraction = new ExtendedAbstraction(implementation);
    
    expect(abstraction.operation()).toBe(
      'ExtendedAbstraction: Extended operation with:\n' +
      'ConcreteImplementationA: Here\'s the result on platform A.'
    );
  });
}); 