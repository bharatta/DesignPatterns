# Bridge Pattern

## Purpose
The Bridge pattern lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

## When to Use
- When you want to separate an abstraction from its implementation
- When you need to extend a class in several independent dimensions
- When you need to switch implementations at runtime
- When changes in the implementation should not affect the abstraction's code

## Real-World Examples
1. GUI Frameworks
   - Different rendering engines (DirectX, OpenGL)
   - Cross-platform UI components

2. Device Drivers
   - Different hardware implementations
   - Multiple operating systems

3. Database Access
   - Multiple database types
   - Different connection methods

## Implementation Details
The implementation includes:
- Abstraction (interface or abstract class)
- Implementation (interface)
- Concrete Implementations
- Refined Abstractions

## Usage Example 

typescript
// Create implementation
const implementation = new ConcreteImplementationA();
// Create abstraction with implementation
const abstraction = new Abstraction(implementation);
// Use the abstraction
console.log(abstraction.operation());
// Switch implementation at runtime
const newImplementation = new ConcreteImplementationB();
abstraction.setImplementation(newImplementation);

## Benefits
- Decouples interface from implementation
- Improves extensibility
- Hides implementation details from clients
- Allows runtime switching of implementations
- Follows Single Responsibility Principle
- Follows Open/Closed Principle

## Drawbacks
- Increases code complexity
- Might be overkill for simple classes

## Related Patterns
- Abstract Factory: Can create and configure a specific Bridge
- Adapter: Adapts interfaces while Bridge separates interfaces from implementation
- State: Like Bridge but for behavior variations