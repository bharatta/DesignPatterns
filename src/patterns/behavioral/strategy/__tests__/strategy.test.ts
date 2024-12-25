import { Sorter } from '../context/Sorter';
import { BubbleSortStrategy } from '../strategies/BubbleSortStrategy';
import { QuickSortStrategy } from '../strategies/QuickSortStrategy';
import { MergeSortStrategy } from '../strategies/MergeSortStrategy';

describe('Sorting Strategy Pattern', () => {
  let sorter: Sorter;
  const testData = [64, 34, 25, 12, 22, 11, 90];
  const sortedData = [11, 12, 22, 25, 34, 64, 90];
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('Different Sorting Strategies', () => {
    it('should sort using Bubble Sort', () => {
      sorter = new Sorter(new BubbleSortStrategy());
      expect(sorter.executeSort(testData)).toEqual(sortedData);
      expect(consoleSpy).toHaveBeenCalledWith('Using Bubble Sort Strategy');
    });

    it('should sort using Quick Sort', () => {
      sorter = new Sorter(new QuickSortStrategy());
      expect(sorter.executeSort(testData)).toEqual(sortedData);
      expect(consoleSpy).toHaveBeenCalledWith('Using Quick Sort Strategy');
    });

    it('should sort using Merge Sort', () => {
      sorter = new Sorter(new MergeSortStrategy());
      expect(sorter.executeSort(testData)).toEqual(sortedData);
      expect(consoleSpy).toHaveBeenCalledWith('Using Merge Sort Strategy');
    });
  });

  describe('Strategy Switching', () => {
    it('should allow switching sorting strategies', () => {
      sorter = new Sorter(new BubbleSortStrategy());
      
      sorter.executeSort(testData);
      expect(consoleSpy).toHaveBeenCalledWith('Using Bubble Sort Strategy');

      sorter.setStrategy(new QuickSortStrategy());
      sorter.executeSort(testData);
      expect(consoleSpy).toHaveBeenCalledWith('Using Quick Sort Strategy');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty arrays', () => {
      sorter = new Sorter(new BubbleSortStrategy());
      expect(sorter.executeSort([])).toEqual([]);
    });

    it('should handle single element arrays', () => {
      sorter = new Sorter(new QuickSortStrategy());
      expect(sorter.executeSort([1])).toEqual([1]);
    });

    it('should handle already sorted arrays', () => {
      sorter = new Sorter(new MergeSortStrategy());
      expect(sorter.executeSort([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
}); 