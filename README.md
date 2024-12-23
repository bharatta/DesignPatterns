# TypeScript Design Patterns Implementation

A comprehensive implementation of design patterns in TypeScript, including Creational, Structural, and Behavioral patterns.

## Table of Contents
- [Setup Guide](#setup-guide)
- [Available Scripts](#available-scripts)
- [Design Patterns Overview](#design-patterns-overview)
- [Project Structure](#project-structure)
- [Testing](#testing)

## Setup Guide

1. Clone the repository

```bash
git clone <repository-url>
cd typescript-design-patterns
```

2. Install dependencies

```bash
npm install
```

3. Build the project

```bash
npm run build
```


## Available Scripts

- `npm run structural` - Run all structural pattern examples
- `npm run behavioral` - Run all behavioral pattern examples
- `npm run creational` - Run all creational pattern examples
- `npm run all` - Run all pattern examples
- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Design Patterns Overview

### Behavioral Patterns

1. **Chain of Responsibility**
   - Purpose: Pass requests along a chain of handlers
   - When to use: For processing different kinds of requests in various ways
   - Example: `src/patterns/behavioral/chain-of-responsibility`

2. **Command**
   - Purpose: Turn requests into stand-alone objects
   - When to use: For parameterizing objects with operations
   - Example: `src/patterns/behavioral/command`

3. **Interpreter**
   - Purpose: Define grammar and interpret expressions
   - When to use: For parsing simple domain-specific languages
   - Example: `src/patterns/behavioral/interpreter`

4. **Iterator**
   - Purpose: Sequential access to elements
   - When to use: For traversing collections without exposing structure
   - Example: `src/patterns/behavioral/iterator`

5. **Mediator**
   - Purpose: Reduce chaotic dependencies between objects
   - When to use: For loose coupling between components
   - Example: `src/patterns/behavioral/mediator`

6. **Memento**
   - Purpose: Capture and restore object's state
   - When to use: For implementing undo mechanisms
   - Example: `src/patterns/behavioral/memento`

7. **Observer**
   - Purpose: Define subscription mechanism
   - When to use: For maintaining consistent state between related objects
   - Example: `src/patterns/behavioral/observer`

8. **State**
   - Purpose: Alter object's behavior when state changes
   - When to use: For objects with state-dependent behavior
   - Example: `src/patterns/behavioral/state`

9. **Strategy**
   - Purpose: Define family of interchangeable algorithms
   - When to use: For selecting algorithms at runtime
   - Example: `src/patterns/behavioral/strategy`

10. **Template Method**
    - Purpose: Define skeleton of algorithm
    - When to use: For implementing invariant algorithm parts once
    - Example: `src/patterns/behavioral/template-method`

11. **Visitor**
    - Purpose: Separate algorithms from objects
    - When to use: For adding operations to objects without modifying them
    - Example: `src/patterns/behavioral/visitor`

### Creational Patterns
(Details for Abstract Factory, Builder, Factory Method, Prototype, Singleton)

### Structural Patterns
(Details for Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy)

## Project Structure
```
src/
├── patterns/
│ ├── behavioral/
│ ├── creational/
│ ├── structural/
│ └── index.ts
├── index.ts
└── README.md
```

Each pattern follows this structure:

```
pattern-name/
├── interfaces.ts # Pattern interfaces
├── implementation.ts # Concrete implementations
├── example.ts # Usage examples
├── README.md # Pattern documentation
└── tests/ # Pattern tests
```


## Testing

### Running Tests

Run all tests
```bash
npm test
```
Run tests for specific pattern
```bash
npm test -- patterns/behavioral/visitor
```
Run with coverage
```bash
npm run test:coverage
```


### Test Coverage
Coverage reports are generated in `coverage/` directory after running:

```bash
npm run test:coverage
```


## Contributing

1. Create feature branch
2. Implement pattern
3. Add tests
4. Update documentation
5. Submit pull request

## Best Practices

1. Follow SOLID principles
2. Write comprehensive tests
3. Document pattern usage
4. Include real-world examples
5. Maintain consistent structure

## Additional Resources

- Design Patterns Book (Gang of Four)
- TypeScript Documentation
- Jest Testing Framework
- SOLID Principles