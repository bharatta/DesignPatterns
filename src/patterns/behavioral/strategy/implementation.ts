import { IStrategy, IContext } from './interfaces';

// Concrete Strategies
export class ConcreteStrategyA implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

// Context
export class Context implements IContext {
  private strategy: IStrategy;
  private data: string[] = ['a', 'b', 'c', 'd', 'e'];

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log('Context: Sorting data using the strategy');
    const result = this.strategy.doAlgorithm(this.data);
    console.log(result.join(','));
  }
} 