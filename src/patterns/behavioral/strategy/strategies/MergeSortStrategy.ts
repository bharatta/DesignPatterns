import { ISortStrategy } from '../interfaces/ISortStrategy';

export class MergeSortStrategy implements ISortStrategy {
  public sort(data: number[]): number[] {
    const arr = [...data];
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.sort(left), this.sort(right));
  }

  private merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    while (left.length && right.length) {
      result.push(left[0] <= right[0] ? left.shift()! : right.shift()!);
    }
    return [...result, ...left, ...right];
  }

  public getName(): string {
    return 'Merge Sort';
  }
} 