# Mediator Pattern

## Purpose
The Mediator pattern reduces coupling between components by making them communicate indirectly, through a special mediator object.

## When to Use
- When components need to communicate in complex ways
- When components should be reusable and shouldn't know about each other
- When you want to customize communication between components without subclassing them
- When you have many components that need to interact

## Real-World Examples
1. Air Traffic Control
   - Planes communicate through control tower
   - Control tower coordinates all flights

2. Chat Room
   - Users communicate through chat server
   - Server manages all message routing

3. GUI Components
   - Form elements communicate through form object
   - Dialog box manages component interactions

## Implementation Details
The implementation includes:
- Mediator interface
- Concrete Mediator
- Component interface
- Concrete Components

## Usage Example 
```typescript
// Create components
const component1 = new Component1();
const component2 = new Component2();
// Create mediator and connect components
const mediator = new ConcreteMediator(component1, component2);
// Components work through mediator
component1.doA();
component2.doD();
```

## Benefits
- Reduces coupling between components
- Centralizes control
- Simplifies component communication
- Makes it easier to modify component interaction
- Promotes reusability of components

## Drawbacks
- Mediator can become too complex
- Can create a single point of failure
- Can become a god object

## Related Patterns
- Observer: Often used together with Mediator
- Command: Can be used to encapsulate operations
- Facade: Similar but with different intent
- Chain of Responsibility: Can be used together for complex workflows