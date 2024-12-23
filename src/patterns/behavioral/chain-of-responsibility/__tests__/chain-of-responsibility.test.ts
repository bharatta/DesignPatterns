import { MonkeyHandler, SquirrelHandler, DogHandler } from '../implementation';

describe('Chain of Responsibility Pattern', () => {
  let monkey: MonkeyHandler;
  let squirrel: SquirrelHandler;
  let dog: DogHandler;

  beforeEach(() => {
    monkey = new MonkeyHandler();
    squirrel = new SquirrelHandler();
    dog = new DogHandler();
    monkey.setNext(squirrel).setNext(dog);
  });

  it('should handle banana with monkey', () => {
    expect(monkey.handle('Banana')).toBe('Monkey: I\'ll eat the Banana.');
  });

  it('should handle nut with squirrel', () => {
    expect(monkey.handle('Nut')).toBe('Squirrel: I\'ll eat the Nut.');
  });

  it('should handle meatball with dog', () => {
    expect(monkey.handle('MeatBall')).toBe('Dog: I\'ll eat the MeatBall.');
  });

  it('should return null for unhandled requests', () => {
    expect(monkey.handle('Coffee')).toBeNull();
  });

  it('should work when starting from middle of chain', () => {
    expect(squirrel.handle('MeatBall')).toBe('Dog: I\'ll eat the MeatBall.');
  });
}); 