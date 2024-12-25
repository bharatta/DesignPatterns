/**
 * Dependency Inversion Principle (DIP)
 * This service depends on the IPaymentProcessor abstraction,
 * not on concrete implementations.
 * 
 * Single Responsibility Principle (SRP)
 * Responsible only for coordinating payment processing through the adapter.
 * 
 * Usage Example:
 * const paymentService = new PaymentService(new PayPalAdapter(new PayPalAPI()));
 * const result = await paymentService.processPayment(100, "USD", "Payment for order #123");
 */
import { IPaymentProcessor } from './interfaces';
import { PaymentDetails, PaymentResult } from './models';

export class PaymentService {
  constructor(private paymentProcessor: IPaymentProcessor) {}

  async processPayment(amount: number, currency: string, description: string): Promise<PaymentResult> {
    const details = new PaymentDetails(amount, currency, description);
    return await this.paymentProcessor.processPayment(details);
  }
} 