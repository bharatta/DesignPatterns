# Facade Pattern

## Purpose
The Facade pattern provides a simplified interface to a complex subsystem. It defines a higher-level interface that makes the subsystem easier to use.

## When to Use
- When you need to provide a simple interface to a complex subsystem
- When you want to layer your subsystems
- When you want to decouple your subsystem from clients and other subsystems
- When you need to have a control point to a subsystem

## Real-World Examples
1. Computer Startup
   - Power up CPU
   - Check memory
   - Load OS
   - Initialize drivers
   All wrapped in a simple "start" button

2. Online Shopping
   - Check inventory
   - Process payment
   - Update order status
   - Send notifications
   All wrapped in a simple "checkout" process

3. Video Conversion
   - Load file
   - Apply codec
   - Process audio
   - Save output
   All wrapped in a simple "convert" method

## Implementation Details
The implementation includes:
- Facade class that wraps complex subsystems
- Subsystem classes
- Optional interfaces for subsystems

## Usage Example 
```typescript
// Complex subsystem parts
const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
// Simple facade interface
const facade = new Facade(subsystem1, subsystem2);
facade.operation();
```

## Benefits
- Isolates clients from subsystem components
- Promotes weak coupling
- Reduces compilation dependencies
- Allows for subsystem changes without affecting clients

## Drawbacks
- Can become a god object coupled to all classes
- May introduce unnecessary abstraction
- May hide useful complexity that clients need to be aware of

## Related Patterns
- Abstract Factory: Can be used with Facade to create subsystem objects
- Mediator: Similar but with different intent
- Singleton: Facade objects are often singletons