# Command Pattern

## Purpose
The Command pattern turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as method arguments, delay or queue a request's execution, and support undoable operations.

## When to Use
- When you need to parameterize objects with operations
- When you need to queue operations, schedule their execution, or execute them remotely
- When you need to implement reversible operations
- When you want to structure a system around high-level operations built on primitive operations

## Real-World Examples
1. GUI Buttons and Menu Items
   - Each button/menu item is a command
   - Same command can be bound to different triggers

2. Text Editor Operations
   - Cut, copy, paste commands
   - Undo/redo functionality

3. Transaction Processing
   - Database transactions
   - Financial transactions
   - Command logging and replay

## Implementation Details
The implementation includes:
- Command interface
- Concrete Commands
- Receiver (performs the actual work)
- Invoker (asks command to carry out request)
- Client (creates and configures concrete commands)

## Usage Example
```typescript
// Create receiver and commands
const receiver = new Receiver();
const command1 = new ConcreteCommand(receiver);
const command2 = new ConcreteCommand(receiver);
// Create invoker and set commands
const invoker = new Invoker();
invoker.setCommand(command1);
invoker.executeCommand();
// Execute commands directly
command2.execute();
command2.undo();
```

## Benefits
- Decouples classes that invoke operations from classes that perform these operations
- Allows you to create sequences of commands
- Makes it easy to add new commands
- Supports undo/redo operations
- Supports logging and transactions

## Drawbacks
- Increases number of classes for each individual command
- May be overkill for simple applications

## Related Patterns
- Composite: Can be used to implement MacroCommands
- Memento: Can keep state for undo
- Prototype: Commands can be cloned before being placed in history