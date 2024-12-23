# Flyweight Pattern

## Purpose
The Flyweight pattern lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all the data in each object.

## When to Use
- When your program needs to spawn a huge number of similar objects
- When RAM is a critical resource
- When many objects can share parts of their state
- When application needs object sharing to function properly

## Real-World Examples
1. Text Editor
   - Character objects sharing font data
   - Style information shared across text blocks

2. Game Development
   - Particle systems
   - Terrain tiles
   - Common textures and models

3. Web Browser
   - Image caching
   - Font rendering
   - DOM element reuse

## Implementation Details
The implementation includes:
- Flyweight interface
- Concrete Flyweight class
- Flyweight Factory
- Client code managing extrinsic state

## Usage Example
```typescript
// Create factory with initial shared states
const factory = new FlyweightFactory([
['Model1', 'Red'],
['Model2', 'Blue']
]);
// Get or create flyweight
const flyweight = factory.getFlyweight(['Model1', 'Red']);
// Use with unique state
flyweight.operation('UniqueID123');
```

## Benefits
- Reduces memory usage
- Improves performance with shared objects
- Centralizes state management
- Supports large numbers of fine-grained objects

## Drawbacks
- Increases complexity
- May trade CPU cycles for memory
- Can make code harder to understand
- Requires careful separation of shared/unique state

## Related Patterns
- Composite: Often combined with Flyweight to implement shared leaf nodes
- State/Strategy: Like Flyweight but without sharing
- Singleton: Flyweight Factory is often implemented as a Singleton