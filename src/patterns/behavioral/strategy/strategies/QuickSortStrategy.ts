import { ISortStrategy } from '../interfaces/ISortStrategy';

export class QuickSortStrategy implements ISortStrategy {
  public sort(data: number[]): number[] {
    const arr = [...data];
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = arr.filter((x, i) => i > 0 && x <= pivot);
    const right = arr.filter(x => x > pivot);

    return [...this.sort(left), pivot, ...this.sort(right)];
  }

  public getName(): string {
    return 'Quick Sort';
  }
} 