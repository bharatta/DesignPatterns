import { Originator, Caretaker } from './implementation';

export const runMementoExample = (): void => {
  
  const originator = new Originator('Super-duper-super-puper-super.');
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log('\n\tClient: Now, let\'s see the history!');
  caretaker.showHistory();

  console.log('\n\tClient: Let\'s rollback!');
  caretaker.undo();

  console.log('\n\tClient: Once more!');
  caretaker.undo();
}; 