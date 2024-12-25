/**
 * Open/Closed Principle (OCP)
 * This abstract class is open for extension but closed for modification.
 * New payment processors can extend this base class without modifying existing code.
 * 
 * Single Responsibility Principle (SRP)
 * Handles the common validation logic for all payment processors.
 */
import { IPaymentProcessor, IPaymentValidator } from '../interfaces';
import { PaymentDetails, PaymentResult } from '../models';

export abstract class BasePaymentProcessor implements IPaymentProcessor, IPaymentValidator {
  abstract processPayment(paymentDetails: PaymentDetails): Promise<PaymentResult>;
  
  validatePayment(details: PaymentDetails): boolean {
    return details.amount > 0 && details.currency.length === 3;
  }
} 