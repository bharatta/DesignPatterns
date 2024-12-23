import { Invoker, SimpleCommand, ComplexCommand, Receiver } from '../implementation';

describe('Command Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should execute simple command', () => {
    const simpleCommand = new SimpleCommand('Test');
    simpleCommand.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'SimpleCommand: See, I can do simple things like printing (Test)'
    );
  });

  it('should execute complex command', () => {
    const receiver = new Receiver();
    const complexCommand = new ComplexCommand(receiver, 'Task A', 'Task B');
    complexCommand.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'ComplexCommand: Complex stuff should be done by a receiver object.'
    );
    expect(consoleSpy).toHaveBeenCalledWith('Receiver: Working on (Task A.)');
    expect(consoleSpy).toHaveBeenCalledWith('Receiver: Also working on (Task B.)');
  });

  it('should work with invoker', () => {
    const invoker = new Invoker();
    const receiver = new Receiver();

    invoker.setOnStart(new SimpleCommand('Start'));
    invoker.setOnFinish(new ComplexCommand(receiver, 'End Task A', 'End Task B'));
    invoker.doSomethingImportant();

    expect(consoleSpy).toHaveBeenCalledWith(
      'SimpleCommand: See, I can do simple things like printing (Start)'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'ComplexCommand: Complex stuff should be done by a receiver object.'
    );
  });

  it('should handle undo operations', () => {
    const simpleCommand = new SimpleCommand('Test');
    simpleCommand.undo();
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'SimpleCommand: Undoing print of (Test)'
    );

    const receiver = new Receiver();
    const complexCommand = new ComplexCommand(receiver, 'Task A', 'Task B');
    complexCommand.undo();
    
    expect(consoleSpy).toHaveBeenCalledWith('ComplexCommand: Undoing complex stuff.');
  });
}); 