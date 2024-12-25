# Strategy Pattern - Sorting Algorithm Example

## Purpose
The Strategy Pattern enables selecting an algorithm's implementation at runtime. It lets you define a family of algorithms, encapsulate each one, and make them interchangeable.

## Project Structure
```
src/patterns/behavioral/strategy/
├── interfaces/
│   ├── ISortStrategy.ts    # Strategy interface
│   └── ISortContext.ts     # Context interface
├── strategies/
│   ├── BubbleSortStrategy.ts
│   ├── QuickSortStrategy.ts
│   └── MergeSortStrategy.ts
├── context/
│   └── Sorter.ts          # Context implementation
├── sort-strategy-example.ts
└── __tests__/
    └── strategy.test.ts
```

## SOLID Principles Implementation

### 1. Single Responsibility Principle
Each class has one job:
```typescript
// BubbleSortStrategy.ts - Only handles bubble sort
export class BubbleSortStrategy implements ISortStrategy {
  public sort(data: number[]): number[];
  public getName(): string;
}
```

### 2. Open/Closed Principle
Add new strategies without modifying existing code:
```typescript
// New strategy - just implement ISortStrategy
export class HeapSortStrategy implements ISortStrategy {
  public sort(data: number[]): number[];
  public getName(): string;
}
```

### 3. Liskov Substitution Principle
All strategies are interchangeable:
```typescript
const sorter = new Sorter(new BubbleSortStrategy());
sorter.setStrategy(new QuickSortStrategy()); // Any strategy works
```

### 4. Interface Segregation Principle
Small, focused interfaces:
```typescript
interface ISortStrategy {
  sort(data: number[]): number[];
  getName(): string;
}
```

### 5. Dependency Inversion Principle
High-level modules depend on abstractions:
```typescript
class Sorter {
  constructor(private strategy: ISortStrategy) {} // Depends on interface
}
```

## Usage Example
```typescript
// Create sorter with initial strategy
const sorter = new Sorter(new BubbleSortStrategy());

// Sort using bubble sort
console.log(sorter.executeSort([64, 34, 25, 12]));

// Switch to quick sort
sorter.setStrategy(new QuickSortStrategy());
console.log(sorter.executeSort([64, 34, 25, 12]));
```

## When to Use
1. When you need different variants of an algorithm
2. When you have a family of similar algorithms
3. When algorithm behavior should be interchangeable at runtime
4. When an algorithm uses data that clients shouldn't know about

## Benefits
1. **Encapsulation**: Each algorithm is isolated
2. **Flexibility**: Easy to add new strategies
3. **Runtime Switching**: Change algorithms at runtime
4. **Testability**: Each strategy can be tested independently
5. **Maintainability**: Clean separation of concerns

## Real-World Applications
1. Sorting algorithms (as shown)
2. Payment processing methods
3. Compression algorithms
4. Authentication strategies
5. Route calculation in navigation apps

## Testing
```typescript
describe('Sorting Strategy Pattern', () => {
  it('should sort using Bubble Sort', () => {
    const sorter = new Sorter(new BubbleSortStrategy());
    expect(sorter.executeSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
});
```

## Best Practices
1. Keep strategies independent
2. Use meaningful names for strategies
3. Consider performance implications
4. Document strategy behaviors
5. Test each strategy separately
6. Follow SOLID principles