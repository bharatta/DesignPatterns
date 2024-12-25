export interface ISortStrategy {
  sort(data: number[]): number[];
  getName(): string;
}

export interface ISortContext {
  setStrategy(strategy: ISortStrategy): void;
  executeSort(data: number[]): number[];
} 