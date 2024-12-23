# Visitor Pattern

## Purpose
The Visitor pattern lets you separate algorithms from the objects on which they operate. It allows you to add new operations to existing object structures without modifying those structures.

## When to Use
- When you need to perform operations on all elements of a complex object structure
- When you need to clean up the business logic of auxiliary behaviors
- When a behavior makes sense only in some classes of a class hierarchy
- When you have many unrelated operations to perform across a set of objects

## Real-World Examples
1. Document Object Model (DOM)
   - HTML/XML document processing
   - Different operations on elements
   - Document validation/transformation

2. Abstract Syntax Tree (AST)
   - Compiler operations
   - Code analysis
   - Code generation

3. Shopping Cart
   - Price calculation
   - Tax calculation
   - Shipping calculation

## Implementation Details
The implementation includes:
- Visitor interface
- Concrete Visitors
- Element interface
- Concrete Elements
- Object Structure

## Usage Example 
```typescript
// Define element interface
interface Element {
accept(visitor: Visitor): void;
}
// Create concrete elements
class ConcreteElementA implements Element {
accept(visitor: Visitor) {
visitor.visitElementA(this);
}
}
// Create visitor
class ConcreteVisitor {
visitElementA(element: ConcreteElementA) {
// Process ElementA
}
}
// Use visitor
const element = new ConcreteElementA();
const visitor = new ConcreteVisitor();
element.accept(visitor);
```

## Benefits
- Open/Closed Principle
- Single Responsibility Principle
- Accumulating state while traversing
- Gather related operations
- Separate algorithms from objects

## Drawbacks
- Complex to implement
- Violates encapsulation
- Must update all visitors when adding new elements
- Can be overkill for simple object structures

## Related Patterns
- Command: Visitor can be used to implement operations in Command
- Iterator: Visitor can traverse structure with Iterator
- Composite: Visitor can operate over Composite tree