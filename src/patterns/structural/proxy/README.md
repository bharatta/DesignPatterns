# Proxy Pattern

## Purpose
The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

## When to Use
- When you need lazy initialization (virtual proxy)
- When you need access control (protection proxy)
- When you need logging/monitoring (logging proxy)
- When you need caching (caching proxy)
- When you need smart reference counting

## Real-World Examples
1. Virtual Proxy
   - Loading large images in web pages
   - Database connection management
   - Loading heavy objects on demand

2. Protection Proxy
   - Access control systems
   - Rights management systems
   - Resource access control

3. Logging Proxy
   - Audit trails
   - Performance monitoring
   - Resource usage tracking

## Implementation Details
The implementation includes:
- Subject interface
- RealSubject class
- Proxy class
- Different types of proxies (Virtual, Protection, etc.)

## Usage Example 
// Basic Proxy
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
proxy.request();
// Virtual Proxy
const virtualProxy = new VirtualProxy();
virtualProxy.request(); // Creates RealSubject only when needed
// Protection Proxy
const protectionProxy = new ProtectionProxy(realSubject, isAdmin);
protectionProxy.request(); // Checks access rights

## Benefits
- Controls access to another object
- Can manage lifecycle of the service object
- Works even if service object isn't ready or available
- Adds security, logging, lazy loading without changing the service

## Drawbacks
- Code may become more complicated
- Response from service might get delayed
- Some patterns might be overkill for simple applications

## Related Patterns
- Adapter: Provides different interface, Proxy provides same interface
- Decorator: Adds responsibilities, Proxy controls access
- Facade: Proxy works with single object, Facade with whole subsystem