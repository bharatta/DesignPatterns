import { IState, IContext } from './interfaces';

// Context
export class Context implements IContext {
  private state!: IState;

  constructor(state: IState) {
    this.transitionTo(state);
  }

  public transitionTo(state: IState): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
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
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

export class ConcreteStateB extends State {
  public handle1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  public handle2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateA());
  }
} 