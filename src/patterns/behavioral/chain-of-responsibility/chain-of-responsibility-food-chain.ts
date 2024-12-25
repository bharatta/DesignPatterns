import { MonkeyHandler, SquirrelHandler, DogHandler } from './implementation';

export const runChainOfResponsibilityExample = (): void => {
  
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  // The client should be able to send requests to any handler, not just the first
  console.log('\tChain: Monkey > Squirrel > Dog\n');
  
  const foods = ['Nut', 'Banana', 'MeatBall', 'Coffee'];
  
  for (const food of foods) {
    let print = `\tClient: Who wants a ${food}?`;
    const result = monkey.handle(food);
    if (result) {
      print += `\t${result}`;
    } else {
      print += `\t${food} was left untouched.`;
    }
    console.log(print);
  }
}; 