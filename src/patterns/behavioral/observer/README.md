# Observer Pattern

## Purpose
The Observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

## When to Use
- When changes to one object require changing others, and you don't know how many objects need to be changed
- When some objects need to observe others, but only for a limited time or in specific cases
- When an object should be able to notify other objects without making assumptions about who these objects are

## Real-World Examples
1. Event Handling Systems
   - GUI components
   - User input handling
   - Custom event systems

2. Subscription Services
   - Newsletter subscriptions
   - Social media notifications
   - Push notifications

3. Data Binding
   - MVC/MVVM patterns
   - Real-time data updates
   - Live data monitoring

## Implementation Details
The implementation includes:
- Subject interface
- Observer interface
- Concrete Subject
- Concrete Observers

## Usage Example 
```typescript
// Create subject and observers
const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();
// Subscribe observers
subject.attach(observer1);
subject.attach(observer2);
// Change subject state
subject.setState(newState);
// Observers are automatically notified
// Unsubscribe observer
subject.detach(observer1);
```

## Benefits
- Open/Closed Principle
- Establishes relationships between objects at runtime
- Supports loose coupling
- Abstract coupling between Subject and Observer

## Drawbacks
- Observers are notified in random order
- Memory leaks if observers aren't properly unsubscribed
- Unexpected updates to observers
- Complex update logic can lead to performance issues

## Related Patterns
- Mediator: Observer is often used with Mediator
- Singleton: Subject is often a Singleton
- Command: Can use Command pattern to undo operations