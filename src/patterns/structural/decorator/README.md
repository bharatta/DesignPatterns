# Decorator Pattern

## Purpose
The Decorator pattern lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

## When to Use
- When you need to add responsibilities to objects dynamically
- When extension by subclassing is impractical
- When you want to add functionality to individual objects without affecting other objects
- When you want to add behaviors that can be withdrawn

## Real-World Examples
1. UI Components
   - Adding scrolling to any view component
   - Adding borders or shadows to widgets

2. Data Streams
   - Adding encryption
   - Adding compression
   - Adding logging

3. Web Service Layers
   - Adding authentication
   - Adding caching
   - Adding logging

## Implementation Details
The implementation includes:
- Component interface
- Concrete Component
- Base Decorator
- Concrete Decorators

## Usage Example 

// Create base component
const component = new ConcreteComponent();
// Add decorators
const withLogging = new LoggingDecorator(component);
const withEncryption = new EncryptionDecorator(withLogging);
// Use decorated component
withEncryption.operation();

## Benefits
- More flexible than inheritance
- Supports Single Responsibility Principle
- Allows adding/removing responsibilities at runtime
- Avoids feature-laden classes high up in the hierarchy

## Drawbacks
- Hard to remove a specific wrapper from the stack
- Hard to implement a decorator that doesn't depend on the order
- Initial configuration of layers might be complicated

## Related Patterns
- Adapter: Decorator changes object's interface, Adapter makes incompatible interfaces compatible
- Composite: Decorator is like Composite but has only one child component
- Strategy: Decorator alters object's skin, Strategy changes its guts