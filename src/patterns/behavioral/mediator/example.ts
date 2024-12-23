import { Component1, Component2, ConcreteMediator } from './implementation';

export const runMediatorExample = (): void => {
  console.log('Mediator Pattern Example:');

  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  console.log('Client triggers operation A.');
  c1.doA();

  console.log('\nClient triggers operation D.');
  c2.doD();
}; 