import { Component1, Component2, ConcreteMediator } from './implementation';

export const runMediatorExample = (): void => {

  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  console.log('\tClient triggers operation A.');
  mediator.notify(c1, 'A');

  console.log('\n\tClient triggers operation D.');
  mediator.notify(c2, 'D');
}; 