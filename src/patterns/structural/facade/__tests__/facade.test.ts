import { Facade, Subsystem1, Subsystem2 } from '../implementation';

describe('Facade Pattern', () => {
  it('should work with existing subsystems', () => {
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();
    const facade = new Facade(subsystem1, subsystem2);

    expect(facade.operation()).toBe(
      'Facade initializes subsystems:\n' +
      'Subsystem1: Ready!\n' +
      'Subsystem2: Get ready!\n' +
      'Facade orders subsystems to perform the action:\n' +
      'Subsystem1: Go!\n' +
      'Subsystem2: Fire!'
    );
  });

  it('should work with new subsystems', () => {
    const facade = new Facade();

    expect(facade.operation()).toBe(
      'Facade initializes subsystems:\n' +
      'Subsystem1: Ready!\n' +
      'Subsystem2: Get ready!\n' +
      'Facade orders subsystems to perform the action:\n' +
      'Subsystem1: Go!\n' +
      'Subsystem2: Fire!'
    );
  });

  it('should work with individual subsystems', () => {
    const subsystem1 = new Subsystem1();
    const subsystem2 = new Subsystem2();

    expect(subsystem1.operation1()).toBe('Subsystem1: Ready!');
    expect(subsystem1.operationN()).toBe('Subsystem1: Go!');
    expect(subsystem2.operation1()).toBe('Subsystem2: Get ready!');
    expect(subsystem2.operationZ()).toBe('Subsystem2: Fire!');
  });
}); 