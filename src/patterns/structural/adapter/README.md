# Adapter Pattern - Payment Processing Example

## Purpose
The Adapter pattern allows objects with incompatible interfaces to collaborate by wrapping an object in an adapter that makes it compatible with another class.

## When to Use
- When you want to use an existing class, but its interface isn't compatible with the rest of your code
- When you want to reuse several existing subclasses that lack some common functionality
- When you need to integrate classes that have incompatible interfaces

## Overview
This implementation demonstrates the Adapter Pattern using a real-world payment processing scenario. It shows how to adapt different payment gateway APIs (PayPal and Stripe) into a common interface while following SOLID principles.

## Example Overview

### Problem Statement
Imagine you're building an e-commerce platform that needs to support multiple payment providers:
- PayPal uses `makePayment(amount, currency)`
- Stripe uses `createCharge(amountInCents)`
- Each provider has different response formats
- Each provider handles currency differently (dollars vs cents)

### Solution Using Adapter Pattern
![Adapter Pattern Structure](https://www.plantuml.com/plantuml/png/TP11QiCm44NtFiLJLq4BG5L1eXJHX4nYDUqCsqAxtxKYjBRttnv9-zxRJVnwCcgm_7_-RvtPpQKgWQH2KA5Jc8IGJ4zWD1SNJi5x2qXQ9QCaXxKFEe_0-MQz6QJfvjLqt1XWV_WJnQYx9UsVtKVZoR_VVxU-VtE4GRxVtuy-QFxVR-kD1_a4)

```typescript
// Client code remains simple
const paymentService = new PaymentService(
  new PayPalAdapter(new PayPalAPI())
);
await paymentService.processPayment(100, "USD", "Order #123");

// Switch to Stripe without changing client code
const paymentService = new PaymentService(
  new StripeAdapter(new StripeAPI())
);
await paymentService.processPayment(100, "USD", "Order #123");
```

## Project Structure
```
src/patterns/structural/adapter/
├── interfaces/          # Contracts for payment processing
│   ├── IPaymentProcessor.ts
│   └── IPaymentValidator.ts
├── models/             # Data structures
│   ├── PaymentDetails.ts
│   └── PaymentResult.ts
├── services/          # Third-party payment APIs
│   ├── PayPalAPI.ts
│   └── StripeAPI.ts
├── adapters/          # Adapter implementations
│   ├── BasePaymentProcessor.ts
│   ├── PayPalAdapter.ts
│   └── StripeAdapter.ts
├── __tests__/        # Test files
└── PaymentService.ts # Main service class
```

## Implementation Details

### 1. Core Interfaces
```typescript
interface IPaymentProcessor {
  processPayment(paymentDetails: PaymentDetails): Promise<PaymentResult>;
}

interface IPaymentValidator {
  validatePayment(details: PaymentDetails): boolean;
}
```

### 2. Models
```typescript
class PaymentDetails {
  constructor(
    readonly amount: number,
    readonly currency: string,
    readonly description: string
  ) {}
}

class PaymentResult {
  constructor(
    readonly success: boolean,
    readonly transactionId: string,
    readonly message: string
  ) {}
}
```

### 3. Adapters
```typescript
class PayPalAdapter extends BasePaymentProcessor {
  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    // Adapts PayPal's interface to our common interface
  }
}

class StripeAdapter extends BasePaymentProcessor {
  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    // Adapts Stripe's interface to our common interface
  }
}
```

## SOLID Principles Applied

### Single Responsibility Principle (SRP)
- Each adapter handles only one payment provider
- Models handle only data structure
- Services focus on specific API interactions

### Open/Closed Principle (OCP)
- New payment providers can be added without modifying existing code
- `BasePaymentProcessor` provides extension points

### Liskov Substitution Principle (LSP)
- All payment adapters can be used interchangeably
- Consistent behavior across different implementations

### Interface Segregation Principle (ISP)
- Small, focused interfaces (`IPaymentProcessor`, `IPaymentValidator`)
- Classes implement only what they need

### Dependency Inversion Principle (DIP)
- High-level modules depend on abstractions
- Payment service works with interfaces, not concrete implementations

## Adding a New Payment Provider

### Example: Adding Square Payment
1. Create Square API Service:
```typescript
class SquareAPI {
  async charge(amount: number): Promise<any> {
    // Square-specific implementation
  }
}
```

2. Create Square Adapter:
```typescript
class SquareAdapter extends BasePaymentProcessor {
  constructor(private squareService: SquareAPI) {
    super();
  }

  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    // Implement adapter logic
    return new PaymentResult(/* ... */);
  }
}
```

3. Use the new adapter:
```typescript
const squareService = new PaymentService(
  new SquareAdapter(new SquareAPI())
);
```

## Testing
Tests are written using Jest and cover:
- Successful payment processing
- Error handling
- Input validation
- Currency conversion
- Provider-specific behaviors

Example test:
```typescript
describe('PayPal Adapter', () => {
  it('should process payment successfully', async () => {
    const paypalService = new PaymentService(
      new PayPalAdapter(new PayPalAPI())
    );
    const result = await paypalService.processPayment(100, 'USD', 'Test');
    expect(result.success).toBeTruthy();
  });
});
```

## Best Practices
1. Keep adapters focused on translation only
2. Use meaningful names for methods and classes
3. Handle errors consistently
4. Validate input data
5. Use immutable objects for data transfer
6. Write comprehensive tests
7. Document public APIs

## Common Pitfalls to Avoid
1. Don't put business logic in adapters
2. Don't break the LSP by changing expected behavior
3. Don't expose third-party API details
4. Don't skip error handling
5. Don't bypass the adapter interface

## Related Patterns
- Factory Pattern: Could be used to create adapters
- Strategy Pattern: Alternative when algorithms vary
- Facade Pattern: When you need a simplified interface

## Running the Example
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run example
npm run example
```

## Real-World Applications
1. Payment Processing Systems
   - Multiple payment gateways
   - Different API formats
   - Various currency handling

2. Social Media Integration
   - Different social media APIs
   - Various authentication methods
   - Different data formats

3. Cloud Storage Services
   - Multiple storage providers
   - Different API structures
   - Various authentication mechanisms