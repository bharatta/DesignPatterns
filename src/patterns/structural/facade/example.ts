import { Facade, Subsystem1, Subsystem2 } from './implementation';

export const runFacadeExample = (): void => {
  console.log('Facade Pattern Example:');
  
  // The client code may have some of the subsystem's objects already created.
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();
  const facade = new Facade(subsystem1, subsystem2);
  
  console.log('Client: Using the facade with existing subsystems:');
  console.log(facade.operation());

  console.log('\nClient: Using the facade with new subsystems:');
  const newFacade = new Facade();
  console.log(newFacade.operation());
}; 