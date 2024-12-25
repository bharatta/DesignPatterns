# Singleton Pattern - Logger Implementation

## Purpose
Ensures a class has only one instance and provides a global point of access to it. In our Logger implementation, this guarantees centralized logging across the application.

## When to Use
- When exactly one instance of a class is needed throughout the application
- When you need consistent logging across different parts of your application
- When you want to avoid multiple processes writing to the same log file
- When you need a global state for application-wide logging configuration

## Real-World Examples
Our Logger implementation demonstrates several real-world use cases:

1. Authentication Logging
```typescript
const logger = Logger.getInstance();
logger.info('User authentication started');
logger.error('Invalid password attempt');
```

2. Database Operations
```typescript
const logger = Logger.getInstance();
logger.info('Initializing database connection');
logger.warn('Connection pool reaching capacity');
```

3. API Request Monitoring
```typescript
const logger = Logger.getInstance();
logger.info('Incoming POST request to /api/users');
logger.warn('Rate limit threshold reached');
```

4. System Monitoring
```typescript
const logger = Logger.getInstance();
logger.info('System health check started');
logger.error('Disk space critical');
```

## Implementation Details
The implementation includes:
- Private constructor to prevent direct instantiation
- Static instance storage (private static instance: Logger)
- Public static access method (getInstance())
- Three logging levels: info(), warn(), error()
- Timestamp-based log formatting

## Benefits
- Ensures consistent logging format across the application
- Prevents multiple processes writing to logs simultaneously
- Centralizes logging configuration
- Provides global access to logging functionality
- Memory efficient - only one instance exists

## Drawbacks
- Can make unit testing more complex (need to reset singleton state)
- Global state can be dangerous if not managed properly
- Can hide dependencies (objects using the logger don't declare it in their constructor)

## Best Practices
1. Use for truly singleton resources (like logging)
2. Consider dependency injection for better testability
3. Implement proper error handling
4. Add log rotation and management features in production
5. Consider adding log levels and filtering capabilities

## Testing
```typescript
describe('Logger Singleton', () => {
  it('should return the same instance', () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    expect(logger1).toBe(logger2);
  });

  it('should log messages correctly', () => {
    const logger = Logger.getInstance();
    logger.info('Test message');
    // Assert log format and content
  });
});
``` 