import { PayPalAdapter } from './adapters/PayPalAdapter';
import { StripeAdapter } from './adapters/StripeAdapter';
import { PaymentService } from './PaymentService';
import { StripeAPI } from './services';
import { PayPalAPI } from './services/PayPalAPI';

/**
 * Main entry point for the Payment Adapter Pattern implementation
 * 
 * This implementation demonstrates:
 * 1. SOLID Principles
 *    - Single Responsibility: Each class has one job
 *    - Open/Closed: New payment methods can be added without changing existing code
 *    - Liskov Substitution: All adapters can be used interchangeably
 *    - Interface Segregation: Small, focused interfaces
 *    - Dependency Inversion: High-level modules depend on abstractions
 * 
 * 2. Adapter Pattern Benefits
 *    - Converts incompatible payment gateway interfaces into a common interface
 *    - Allows easy integration of new payment providers
 *    - Provides consistent error handling and validation
 * 
 * Usage Example:
 */

export const runPaymentAdapterExample = async () => {
  // Example 1: Using PayPal
  const paypalService = new PaymentService(
    new PayPalAdapter(new PayPalAPI())
  );
  const paypalResult = await paypalService.processPayment(
    100,
    'USD',
    'PayPal payment'
  );
  console.log(paypalResult);

  // Example 2: Using Stripe
  const stripeService = new PaymentService(
    new StripeAdapter(new StripeAPI())
  );
  const stripeResult = await stripeService.processPayment(
    100,
    'USD',
    'Stripe payment'
  );
  console.log(stripeResult);
}

/**
 * To add a new payment provider:
 * 1. Create a new service class for the provider's API
 * 2. Create a new adapter that extends BasePaymentProcessor
 * 3. Implement the processPayment method in the adapter
 * 
 * Example:
 * 
 * class SquareAPI {
 *   async charge(amount: number): Promise<any> {
 *     // Square-specific implementation
 *   }
 * }
 * 
 * class SquareAdapter extends BasePaymentProcessor {
 *   constructor(private squareService: SquareAPI) {
 *     super();
 *   }
 * 
 *   async processPayment(details: PaymentDetails): Promise<PaymentResult> {
 *     // Implement adapter logic
 *   }
 * }
 */ 