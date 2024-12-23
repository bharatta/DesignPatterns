# Adapter Pattern

## Purpose
The Adapter pattern allows objects with incompatible interfaces to collaborate by wrapping an object in an adapter that makes it compatible with another class.

## When to Use
- When you want to use an existing class, but its interface isn't compatible with the rest of your code
- When you want to reuse several existing subclasses that lack some common functionality
- When you need to integrate classes that have incompatible interfaces

## Real-World Examples
1. Data Format Conversion
   - Converting XML to JSON
   - Database result set to object mapping
   
2. Third-party Library Integration
   - Adapting different payment gateways
   - Integrating multiple authentication services

3. Legacy System Integration
   - Modern interface for legacy code
   - API version compatibility

## Implementation Details
The implementation includes:
- Target interface (what the client expects)
- Adaptee (the class that needs to be adapted)
- Adapter (wrapper that makes Adaptee compatible with Target)

## Usage Example 
typescript
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // Now works with client code

## Benefits
- Separates interface conversion from business logic
- Single Responsibility Principle
- Increases reusability
- Improves maintainability

## Drawbacks
- Increases overall code complexity
- Sometimes it's better to change the service class
- Can be overused when simple refactoring would suffice