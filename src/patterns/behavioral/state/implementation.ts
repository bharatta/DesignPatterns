import { IState, IContext } from './interfaces';

// Context
export class Context implements IContext {
  private state!: IState;

  constructor(state: IState) {
    this.transitionTo(state);
  }

  public transitionTo(state: IState): void {
    console.log(`\tContext: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

// Abstract State
abstract class State implements IState {
  protected context!: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  abstract handle1(): void;
  abstract handle2(): void;
}

// Concrete States
export class ConcreteStateA extends State {
  public handle1(): void {
    console.log('\t\tConcreteStateA handles request1.');
    console.log('\t\tConcreteStateA wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log('\t\tConcreteStateA handles request2.');
  }
}

export class ConcreteStateB extends State {
  public handle1(): void {
    console.log('\t\tConcreteStateB handles request1.');
  }

  public handle2(): void {
    console.log('\t\tConcreteStateB handles request2.');
    console.log('\t\tConcreteStateB wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateA());
  }
} 