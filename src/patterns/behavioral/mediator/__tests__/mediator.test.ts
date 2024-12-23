import { Component1, Component2, ConcreteMediator } from '../implementation';

describe('Mediator Pattern', () => {
  let c1: Component1;
  let c2: Component2;
  let mediator: ConcreteMediator;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    c1 = new Component1();
    c2 = new Component2();
    mediator = new ConcreteMediator(c1, c2);
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should handle operation A and trigger related operations', () => {
    c1.doA();

    expect(consoleSpy).toHaveBeenCalledWith('Component 1 does A.');
    expect(consoleSpy).toHaveBeenCalledWith('Mediator reacts on A and triggers following operations:');
    expect(consoleSpy).toHaveBeenCalledWith('Component 2 does C.');
  });

  it('should handle operation D and trigger related operations', () => {
    c2.doD();

    expect(consoleSpy).toHaveBeenCalledWith('Component 2 does D.');
    expect(consoleSpy).toHaveBeenCalledWith('Mediator reacts on D and triggers following operations:');
    expect(consoleSpy).toHaveBeenCalledWith('Component 1 does B.');
    expect(consoleSpy).toHaveBeenCalledWith('Component 2 does C.');
  });

  it('should handle operation B without triggering other operations', () => {
    c1.doB();

    expect(consoleSpy).toHaveBeenCalledWith('Component 1 does B.');
    expect(consoleSpy).not.toHaveBeenCalledWith('Mediator reacts on B and triggers following operations:');
  });

  it('should handle operation C without triggering other operations', () => {
    c2.doC();

    expect(consoleSpy).toHaveBeenCalledWith('Component 2 does C.');
    expect(consoleSpy).not.toHaveBeenCalledWith('Mediator reacts on C and triggers following operations:');
  });
}); 