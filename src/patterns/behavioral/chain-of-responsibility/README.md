# Chain of Responsibility Pattern

## Purpose
The Chain of Responsibility pattern lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process it or to pass it to the next handler in the chain.

## When to Use
- When your program needs to process different kinds of requests in various ways
- When the exact sequence of handlers isn't known beforehand
- When the set of handlers can be dynamically changed
- When you want to decouple senders and receivers

## Real-World Examples
1. Event Handling in UI
   - Button click events bubbling up through DOM
   - Window system event handling

2. Logging Systems
   - Different log levels (DEBUG, INFO, ERROR)
   - Multiple output destinations

3. Request Processing
   - HTTP request middleware
   - Authentication/Authorization filters

## Implementation Details
The implementation includes:
- Handler interface
- Abstract base handler
- Concrete handlers
- Client code that builds the chain

## Usage Example
```typescript
// Create handlers
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();
// Build the chain
handler1.setNext(handler2).setNext(handler3);
// Send requests
handler1.handle("Request 1");
handler1.handle("Request 2");
```

## Benefits
- Reduces coupling between senders and receivers
- Follows Single Responsibility Principle
- Follows Open/Closed Principle
- Provides flexibility in assigning responsibilities
- Allows dynamic changes to the chain

## Drawbacks
- Request might go unhandled
- Can be hard to debug
- May have performance impact for long chains
- No guarantee that a request will be handled

## Related Patterns
- Composite: Chain can be used with Composite
- Command: Chain can be used as the handler of Commands
- Decorator: Chain is similar but with different intent