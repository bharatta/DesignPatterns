# State Pattern

## Purpose
The State pattern lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

## When to Use
- When an object's behavior depends on its state and must change at runtime
- When operations have large, multipart conditional statements that depend on the object's state
- When you have a class polluted with massive conditionals that alter how the class behaves according to current values of fields

## Real-World Examples
1. Media Player
   - Playing state
   - Paused state
   - Stopped state

2. Order Processing
   - New order state
   - Paid state
   - Shipped state
   - Delivered state

3. Document Editing
   - View mode
   - Edit mode
   - Review mode

## Implementation Details
The implementation includes:
- State interface
- Concrete States
- Context class
- State transitions

## Usage Example 
```typescript
// Create context with initial state
const context = new Context(new ConcreteStateA());
// Client works with context
context.request1();
// State changes internally
context.request2();
// State changes again
```

## Benefits
- Encapsulates state-specific behavior
- Makes state transitions explicit
- Eliminates large state machine conditionals
- State classes can be shared

## Drawbacks
- Can be overkill for simple state machines
- Increases number of classes
- Can result in tight coupling if states need to know about each other

## Related Patterns
- Singleton: States are often Singletons
- Strategy: Similar structure but different intent
- Bridge: Similar structure but different intent
