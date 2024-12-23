import { Originator, Caretaker, ConcreteMemento } from '../implementation';

describe('Memento Pattern', () => {
  let originator: Originator;
  let caretaker: Caretaker;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    originator = new Originator('Initial state');
    caretaker = new Caretaker(originator);
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should create memento with correct state', () => {
    const memento = originator.save();
    expect(memento.getState()).toBe('Initial state');
  });

  it('should restore state from memento', () => {
    const initialState = 'Initial state';
    originator.doSomething(); // Changes state to random string
    const memento = new ConcreteMemento(initialState);
    
    originator.restore(memento);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      `Originator: My state has been changed to: ${initialState}`
    );
  });

  it('should backup and undo state changes', () => {
    const initialState = originator.save().getState();
    
    caretaker.backup();
    originator.doSomething();
    caretaker.backup();
    
    caretaker.undo();
    expect(originator.save().getState()).not.toBe(initialState);
  });

  it('should show history of states', () => {
    caretaker.backup();
    originator.doSomething();
    caretaker.backup();
    
    caretaker.showHistory();
    
    expect(consoleSpy).toHaveBeenCalledWith('Caretaker: Here\'s the list of mementos:');
  });
}); 