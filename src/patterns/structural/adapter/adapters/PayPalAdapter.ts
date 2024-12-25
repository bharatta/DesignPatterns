/**
 * Single Responsibility Principle (SRP)
 * This adapter is responsible only for converting PayPal's API to our common interface.
 * 
 * Liskov Substitution Principle (LSP)
 * This adapter can be used anywhere IPaymentProcessor is expected,
 * maintaining the same contract and behavior.
 * 
 * Usage:
 * const paypalAdapter = new PayPalAdapter(new PayPalAPI());
 * const result = await paypalAdapter.processPayment(new PaymentDetails(100, "USD", "Test"));
 */
import { PaymentDetails, PaymentResult } from '../models';
import { PayPalAPI } from '../services';
import { BasePaymentProcessor } from './BasePaymentProcessor';

export class PayPalAdapter extends BasePaymentProcessor {
  constructor(private paypalService: PayPalAPI) {
    super();
  }

  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    if (!this.validatePayment(details)) {
      return new PaymentResult(false, '', 'Invalid payment details');
    }

    try {
      const result = await this.paypalService.makePayment(
        details.amount,
        details.currency
      );

      return new PaymentResult(
        result.status === 'SUCCESS',
        result.id,
        `PayPal payment ${result.status}`
      );
    } catch (error: any) {
      return new PaymentResult(false, '', `PayPal error: ${error.message}`);
    }
  }
} 