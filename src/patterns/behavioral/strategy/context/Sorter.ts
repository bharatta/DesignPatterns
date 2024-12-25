import { ISortContext } from '../interfaces/ISortContext';
import { ISortStrategy } from '../interfaces/ISortStrategy';

export class Sorter implements ISortContext {
  constructor(private strategy: ISortStrategy) {}

  public setStrategy(strategy: ISortStrategy): void {
    this.strategy = strategy;
    // console.log(`\t\tStrategy changed to: ${strategy.getName()}`);
  }

  public executeSort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
} 