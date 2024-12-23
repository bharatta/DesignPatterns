# Iterator Pattern

## Purpose
The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## When to Use
- When you want to access a collection's contents without exposing its internal structure
- When you want to support multiple traversal methods for a collection
- When you want a uniform interface for traversing different collection types
- When you need to decouple algorithms from collections

## Real-World Examples
1. Database Cursors
   - Traversing query results
   - Pagination systems

2. File Systems
   - Directory traversal
   - File search operations

3. Collection Processing
   - Array traversal
   - Tree traversal
   - Graph traversal

## Implementation Details
The implementation includes:
- Iterator interface
- Concrete Iterator
- Aggregate interface
- Concrete Aggregate

## Usage Example 

// Create collection
const collection = new WordsCollection();
collection.addItem("First");
collection.addItem("Second");
// Get iterator
const iterator = collection.getIterator();
// Traverse collection
while (iterator.valid()) {
console.log(iterator.next());
}
// Use reverse iterator
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
console.log(reverseIterator.next());
}

## Benefits
- Supports variations in traversal of a collection
- Simplifies the interface of the aggregate
- More than one traversal can be pending on a collection
- Single Responsibility Principle
- Open/Closed Principle

## Drawbacks
- May be overkill for simple collections
- Using iterator may be less efficient than using collection directly
- Additional memory overhead for storing iterator state

## Related Patterns
- Composite: Iterators are often used to traverse Composite trees
- Factory Method: Can be used to create iterators
- Memento: Can be used to capture iterator's state
- Visitor: Can be used together to traverse complex data structures