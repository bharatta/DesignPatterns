import { ConcreteSubject, ConcreteObserverA, ConcreteObserverB } from './implementation';

export const runObserverExample = (): void => {
  console.log('Observer Pattern Example:');

  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserverA();
  const observer2 = new ConcreteObserverB();

  subject.attach(observer1);
  subject.attach(observer2);

  // Try to attach observer1 again
  subject.attach(observer1);

  subject.someBusinessLogic();
  subject.someBusinessLogic();

  subject.detach(observer2);

  subject.someBusinessLogic();
}; 