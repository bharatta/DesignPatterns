import { PaymentDetails, PaymentResult } from '../models';
import { StripeAPI } from '../services';
import { BasePaymentProcessor } from './BasePaymentProcessor';

export class StripeAdapter extends BasePaymentProcessor {
  constructor(private stripeService: StripeAPI) {
    super();
  }

  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    if (!this.validatePayment(details)) {
      return new PaymentResult(false, '', 'Invalid payment details');
    }

    try {
      const result = await this.stripeService.createCharge(
        details.amount * 100, // Convert to cents
        details.currency
      );

      return new PaymentResult(
        result.succeeded,
        result.chargeId,
        `Stripe payment ${result.succeeded ? 'succeeded' : 'failed'}`
      );
    } catch (error: any) {
      return new PaymentResult(false, '', `Stripe error: ${error.message}`);
    }
  }
} 