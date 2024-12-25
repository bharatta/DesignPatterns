import { ISortStrategy } from './ISortStrategy';

export interface ISortContext {
  setStrategy(strategy: ISortStrategy): void;
  executeSort(data: number[]): number[];
} 