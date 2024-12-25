import { Sorter } from './context/Sorter';
import { BubbleSortStrategy } from './strategies/BubbleSortStrategy';
import { QuickSortStrategy } from './strategies/QuickSortStrategy';
import { MergeSortStrategy } from './strategies/MergeSortStrategy';

export const runStrategyExample = (): void => {
  // Sample data
  const data = [64, 34, 25, 12, 22, 11, 90];
  console.log('\tOriginal array:', JSON.stringify(data));

  // Create sorter with initial strategy
  const sorter = new Sorter(new BubbleSortStrategy());

  // 1. Use Bubble Sort
  console.log('\n\t1. Using Bubble Sort:');
  console.log('\t\tSorted array:', JSON.stringify(sorter.executeSort(data)));

  // 2. Switch to Quick Sort
  console.log('\n\t2. Switching to Quick Sort:');
  sorter.setStrategy(new QuickSortStrategy());
  console.log('\t\tSorted array:', JSON.stringify(sorter.executeSort(data)));

  // 3. Switch to Merge Sort
  console.log('\n\t3. Switching to Merge Sort:');
  sorter.setStrategy(new MergeSortStrategy());
  console.log('\t\tSorted array:', JSON.stringify(sorter.executeSort(data)));

}; 