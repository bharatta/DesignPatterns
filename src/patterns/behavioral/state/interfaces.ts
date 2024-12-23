export interface IState {
  setContext(context: IContext): void;
  handle1(): void;
  handle2(): void;
}

export interface IContext {
  transitionTo(state: IState): void;
  request1(): void;
  request2(): void;
} 