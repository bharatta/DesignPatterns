# Composite Pattern

## Purpose
The Composite pattern lets you compose objects into tree structures and then work with these structures as if they were individual objects.

## When to Use
- When you need to implement a tree-like object structure
- When clients should treat both simple and complex elements uniformly
- When you want to represent part-whole hierarchies of objects

## Real-World Examples
1. File System Structure
   - Files (Leaves)
   - Directories (Composites)
   - Both share common operations

2. GUI Components
   - Simple buttons (Leaves)
   - Complex containers (Composites)
   - Both are treated as visual components

3. Organization Structure
   - Individual employees (Leaves)
   - Departments (Composites)
   - Both are organizational units

## Implementation Details
The implementation includes:
- Component interface (defines common operations)
- Leaf class (represents end objects)
- Composite class (represents complex objects that contain other objects)

## Usage Example 
typescript
// Create structure
const tree = new Composite();
const branch = new Composite();
const leaf1 = new Leaf();
const leaf2 = new Leaf();
// Build hierarchy
branch.add(leaf1);
branch.add(leaf2);
tree.add(branch);
// Use uniformly
console.log(tree.operation());

## Benefits
- Defines class hierarchies of primitive and complex objects
- Makes client code simple
- Makes it easier to add new kinds of components
- Provides flexibility of structure

## Drawbacks
- Can make design overly general
- Might be difficult to restrict components of composite

## Related Patterns
- Chain of Responsibility: Often used with Composite
- Decorator: Often used with Composite
- Flyweight: Can share Composite nodes
- Iterator: Can traverse Composite structures