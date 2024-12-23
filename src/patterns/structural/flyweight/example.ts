import { FlyweightFactory } from './implementation';

export const runFlyweightExample = (): void => {
  console.log('Flyweight Pattern Example:');

  const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
  ]);
  
  factory.listFlyweights();

  // Adding a new car to the database
  const newCar = ['Chevrolet', 'Camaro2018', 'pink'];
  console.log('\nClient: Adding a car to database.');
  const flyweight = factory.getFlyweight(newCar);
  flyweight.operation('CL234IR'); // unique license plate

  // Adding another car with different color
  const anotherCar = ['Chevrolet', 'Camaro2018', 'yellow'];
  console.log('\nClient: Adding another car to database.');
  const newFlyweight = factory.getFlyweight(anotherCar);
  newFlyweight.operation('CL234IR');

  factory.listFlyweights();
}; 