import { ISubsystem1, ISubsystem2 } from './interfaces';

export class Subsystem1 implements ISubsystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!';
  }

  public operationN(): string {
    return 'Subsystem1: Go!';
  }
}

export class Subsystem2 implements ISubsystem2 {
  public operation1(): string {
    return 'Subsystem2: Get ready!';
  }

  public operationZ(): string {
    return 'Subsystem2: Fire!';
  }
}

export class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += '\n' + this.subsystem2.operation1();
    result += '\nFacade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += '\n' + this.subsystem2.operationZ();
    return result;
  }
} 