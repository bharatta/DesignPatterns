import { Originator, Caretaker } from './implementation';

export const runMementoExample = (): void => {
  console.log('Memento Pattern Example:');

  const originator = new Originator('Super-duper-super-puper-super.');
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log('\nClient: Now, let\'s see the history!');
  caretaker.showHistory();

  console.log('\nClient: Let\'s rollback!');
  caretaker.undo();

  console.log('\nClient: Once more!');
  caretaker.undo();
}; 