import { 
  Abstraction, 
  ExtendedAbstraction,
  ConcreteImplementationA,
  ConcreteImplementationB 
} from './implementation';

export const runBridgeExample = (): void => {
  
  let implementation = new ConcreteImplementationA();
  let abstraction = new Abstraction(implementation);
  console.log(abstraction.operation());

  console.log('\n\tChanging implementation to B:');
  implementation = new ConcreteImplementationB();
  abstraction = new ExtendedAbstraction(implementation);
  console.log(abstraction.operation());
}; 