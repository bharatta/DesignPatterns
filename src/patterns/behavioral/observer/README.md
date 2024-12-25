# Observer Pattern - Newsletter System with SOLID Principles

## Purpose
Implements a newsletter system where subscribers (observers) automatically receive updates from a newsletter publisher (subject) following SOLID design principles.

## Project Structure
```
src/patterns/behavioral/observer/
├── interfaces/
│   └── interfaces.ts           # All interfaces (ISubscriber, IPublisher, etc.)
├── models/
│   └── message.ts             # Message model
├── services/
│   └── email.service.ts       # Email sending service
├── publishers/
│   └── newsletter.publisher.ts # Newsletter publisher implementation
├── subscribers/
│   └── email.subscriber.ts    # Email subscriber implementation
├── newsletter-observer.ts      # Main example implementation
└── __tests__/
    └── observer.test.ts       # Tests
```

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)
Each class has one specific job:
```typescript
// EmailService - Handles only email sending
class EmailService implements IEmailService {
  sendEmail(to: string, message: IMessage): void;
}

// NewsletterPublisher - Manages only subscriptions and notifications
class NewsletterPublisher implements IPublisher {
  attach(subscriber: ISubscriber): void;
  detach(subscriber: ISubscriber): void;
  notify(message: IMessage): void;
}
```

### 2. Open/Closed Principle (OCP)
System is open for extension but closed for modification:
- New subscriber types can be added by implementing ISubscriber
- New message types can be added by implementing IMessage
- New notification services can be added by implementing IEmailService

### 3. Liskov Substitution Principle (LSP)
Interfaces are properly abstracted:
```typescript
interface ISubscriber {
  update(message: IMessage): void;
}

interface IMessage {
  title: string;
  content: string;
  date: Date;
}
```

### 4. Interface Segregation Principle (ISP)
Small, specific interfaces:
```typescript
interface IPublisher {
  attach(subscriber: ISubscriber): void;
  detach(subscriber: ISubscriber): void;
  notify(message: IMessage): void;
}

interface IEmailService {
  sendEmail(to: string, message: IMessage): void;
}
```

### 5. Dependency Inversion Principle (DIP)
High-level modules depend on abstractions:
```typescript
class EmailSubscriber implements ISubscriber {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly emailService: IEmailService  // Depends on abstraction
  ) {}
}
```

## Usage Example
```typescript
// Initialize services
const emailService = new EmailService();

// Create publisher and subscribers
const newsletter = new NewsletterPublisher();
const subscriber = new EmailSubscriber('John', 'john@example.com', emailService);

// Subscribe and publish
newsletter.attach(subscriber);
newsletter.publishNewsletter(new NewsletterMessage(
  'Summer Sale!',
  'Get 50% off on all items.'
));
```

## Benefits
1. **Maintainable**: Each component has a single responsibility
2. **Extensible**: Easy to add new types of subscribers or messages
3. **Testable**: Dependencies are injected and interfaces are well-defined
4. **Flexible**: Components are loosely coupled
5. **Scalable**: New features can be added without modifying existing code

## Best Practices
1. Follow SOLID principles for clean and maintainable code
2. Use dependency injection for better testing and flexibility
3. Keep interfaces small and focused
4. Implement proper error handling
5. Use meaningful names for classes and methods
6. Write comprehensive tests for each component

## Testing
```typescript
describe('Newsletter Observer Pattern', () => {
  it('should notify subscribers of new newsletters', () => {
    const publisher = new NewsletterPublisher();
    const subscriber = new EmailSubscriber('John', 'john@example.com', emailService);
    
    publisher.attach(subscriber);
    publisher.publishNewsletter(new NewsletterMessage('Test', 'Content'));
    
    // Assert notification was sent
  });
});
``` 