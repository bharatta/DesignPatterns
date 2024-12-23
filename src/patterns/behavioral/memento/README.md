# Memento Pattern

## Purpose
The Memento pattern lets you save and restore the previous state of an object without revealing the details of its implementation.

## When to Use
- When you need to create snapshots of an object's state
- When direct access to an object's fields/getters/setters violates encapsulation
- When you need to implement undo/redo operations
- When you want to provide rollback functionality

## Real-World Examples
1. Text Editors
   - Undo/redo functionality
   - Saving document state

2. Version Control Systems
   - Commit history
   - Reverting changes

3. Database Transactions
   - Rollback functionality
   - Savepoints

## Implementation Details
The implementation includes:
- Originator (creates and restores from mementos)
- Memento (stores originator's state)
- Caretaker (keeps track of multiple mementos)

## Usage Example 
// Create originator and caretaker
const originator = new Originator('Initial State');
const caretaker = new Caretaker(originator);
// Save state
caretaker.backup();
// Change state
originator.doSomething();
// Save new state
caretaker.backup();
// Restore previous state
caretaker.undo();

## Benefits
- Provides a way to save and restore object's state
- Simplifies originator's code
- Guarantees encapsulation of state data
- Provides easy-to-implement recovery functionality

## Drawbacks
- Might consume lots of RAM if clients create mementos too often
- Caretakers must track originator's lifecycle
- May require additional synchronization for dynamic states

## Related Patterns
- Command: Can use Memento to implement undoable operations
- Iterator: Mementos can be used to capture iteration state
- Prototype: Memento can use Prototype to copy state