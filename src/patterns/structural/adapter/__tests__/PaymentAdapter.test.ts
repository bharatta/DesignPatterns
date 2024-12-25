import { PayPalAPI, StripeAPI } from '../services';
import { PayPalAdapter, StripeAdapter } from '../adapters';
import { PaymentService } from '../PaymentService';
import { PaymentDetails } from '../models';

describe('Payment Adapter Pattern Tests', () => {
  describe('PayPal Adapter', () => {
    let paypalAPI: PayPalAPI;
    let paypalAdapter: PayPalAdapter;
    let paymentService: PaymentService;

    beforeEach(() => {
      paypalAPI = new PayPalAPI();
      paypalAdapter = new PayPalAdapter(paypalAPI);
      paymentService = new PaymentService(paypalAdapter);
    });

    it('should process PayPal payment successfully', async () => {
      const result = await paymentService.processPayment(100, 'USD', 'Test payment');
      
      expect(result.success).toBeTruthy();
      expect(result.transactionId).toMatch(/^PP-/);
      expect(result.message).toContain('SUCCESS');
    });

    it('should reject invalid payment details', async () => {
      const result = await paymentService.processPayment(-100, 'USD', 'Invalid payment');
      
      expect(result.success).toBeFalsy();
      expect(result.message).toBe('Invalid payment details');
    });
  });

  describe('Stripe Adapter', () => {
    let stripeAPI: StripeAPI;
    let stripeAdapter: StripeAdapter;
    let paymentService: PaymentService;

    beforeEach(() => {
      stripeAPI = new StripeAPI();
      stripeAdapter = new StripeAdapter(stripeAPI);
      paymentService = new PaymentService(stripeAdapter);
    });

    it('should process Stripe payment successfully', async () => {
      const result = await paymentService.processPayment(100, 'USD', 'Test payment');
      
      expect(result.success).toBeTruthy();
      expect(result.transactionId).toMatch(/^CH-/);
      expect(result.message).toContain('succeeded');
    });

    it('should handle currency validation', async () => {
      const result = await paymentService.processPayment(100, 'INVALID', 'Test payment');
      
      expect(result.success).toBeFalsy();
      expect(result.message).toBe('Invalid payment details');
    });
  });
}); 