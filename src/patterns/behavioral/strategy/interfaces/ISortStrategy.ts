export interface ISortStrategy {
  sort(data: number[]): number[];
  getName(): string;
} 