import { Context, ConcreteStateA, ConcreteStateB } from '../implementation';

describe('State Pattern', () => {
  let context: Context;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
    context = new Context(new ConcreteStateA());
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should transition from StateA to StateB on request1', () => {
    context.request1();

    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateA handles request1.');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateA wants to change the state of the context.');
    expect(consoleSpy).toHaveBeenCalledWith('Context: Transition to ConcreteStateB.');
  });

  it('should transition from StateB to StateA on request2', () => {
    // First transition to StateB
    context.request1();
    consoleSpy.mockClear();

    // Then test transition back to StateA
    context.request2();

    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateB handles request2.');
    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateB wants to change the state of the context.');
    expect(consoleSpy).toHaveBeenCalledWith('Context: Transition to ConcreteStateA.');
  });

  it('should handle request2 in StateA without transition', () => {
    context.request2();

    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateA handles request2.');
    expect(consoleSpy).not.toHaveBeenCalledWith('Context: Transition to ConcreteStateB.');
  });

  it('should handle request1 in StateB without transition', () => {
    // First transition to StateB
    context.request1();
    consoleSpy.mockClear();

    // Then test request1 in StateB
    context.request1();

    expect(consoleSpy).toHaveBeenCalledWith('ConcreteStateB handles request1.');
    expect(consoleSpy).not.toHaveBeenCalledWith('Context: Transition to ConcreteStateA.');
  });
}); 