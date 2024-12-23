# Strategy Pattern

## Purpose
The Strategy pattern lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## When to Use
- When you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime
- When you have a lot of similar classes that only differ in the way they execute some behavior
- When you need to isolate the algorithm from the code that uses the algorithm
- When a class defines many behaviors that appear as multiple conditional statements in its methods

## Real-World Examples
1. Payment Processing
   - Credit card payment
   - PayPal payment
   - Cryptocurrency payment

2. Navigation Apps
   - Car route
   - Walking route
   - Public transport route

3. Data Compression
   - Fast compression
   - Maximum compression
   - No compression

## Implementation Details
The implementation includes:
- Strategy interface
- Concrete Strategies
- Context class
- Client code

## Usage Example 
```typescript
// Create context with initial strategy
const context = new Context(new ConcreteStrategyA());
// Use first strategy
context.doSomeBusinessLogic();
// Change strategy at runtime
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
```

## Benefits
- Algorithms can be changed at runtime
- Isolation of algorithm implementation details
- Easy to add new strategies
- Eliminates conditional statements
- Better code organization

## Drawbacks
- Clients must be aware of different strategies
- Increased number of objects
- Communication overhead between strategy and context
- Strategy interface may include unused methods

## Related Patterns
- State: Similar structure but different intent
- Command: Strategy is like Command without undo
- Template Method: Strategy uses composition, Template Method uses inheritance
- Decorator: Strategy is like a simplified Decorator