/**
 * Interface Segregation Principle (ISP)
 * This interface defines a single method for processing payments,
 * keeping the interface focused and minimal.
 * 
 * Dependency Inversion Principle (DIP)
 * High-level modules will depend on this abstraction rather than concrete implementations.
 */
import { PaymentDetails, PaymentResult } from '../models';

export interface IPaymentProcessor {
  processPayment(paymentDetails: PaymentDetails): Promise<PaymentResult>;
} 