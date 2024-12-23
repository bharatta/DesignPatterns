import { MonkeyHandler, SquirrelHandler, DogHandler } from './implementation';

export const runChainOfResponsibilityExample = (): void => {
  console.log('Chain of Responsibility Pattern Example:');

  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  // The client should be able to send requests to any handler, not just the first
  console.log('Chain: Monkey > Squirrel > Dog\n');
  
  const foods = ['Nut', 'Banana', 'MeatBall', 'Coffee'];
  
  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);
    const result = monkey.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}; 