export interface IStrategy {
  doAlgorithm(data: string[]): string[];
}

export interface IContext {
  setStrategy(strategy: IStrategy): void;
  doSomeBusinessLogic(): void;
} 