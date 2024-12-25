import { CreditCardPaymentCreator } from '../creators/CreditCardPaymentCreator';
import { CryptoPaymentCreator } from '../creators/CryptoPaymentCreator';
import { PayPalPaymentCreator } from '../creators/PayPalPaymentCreator';

describe('Payment Factory Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('Credit Card Payment', () => {
    const creditCardCreator = new CreditCardPaymentCreator();

    it('should create credit card payment method', () => {
      const payment = creditCardCreator.createPaymentMethod();
      expect(payment.getPaymentDetails()).toContain('Credit Card ending in');
    });

    it('should process credit card payment', () => {
      const result = creditCardCreator.executePayment(100);
      expect(result).toContain('Processing $100');
      expect(result).toContain('Credit Card');
    });

    it('should validate payment before processing', () => {
      const payment = creditCardCreator.createPaymentMethod();
      expect(payment.validatePayment()).toBe(true);
    });
  });

  describe('PayPal Payment', () => {
    const paypalCreator = new PayPalPaymentCreator();

    it('should create PayPal payment method', () => {
      const payment = paypalCreator.createPaymentMethod();
      expect(payment.getPaymentDetails()).toContain('PayPal account:');
    });

    it('should process PayPal payment', () => {
      const result = paypalCreator.executePayment(100);
      expect(result).toContain('Processing $100');
      expect(result).toContain('PayPal');
    });
  });

  describe('Crypto Payment', () => {
    const cryptoCreator = new CryptoPaymentCreator();

    it('should create crypto payment method', () => {
      const payment = cryptoCreator.createPaymentMethod();
      expect(payment.getPaymentDetails()).toContain('wallet:');
    });

    it('should process crypto payment', () => {
      const result = cryptoCreator.executePayment(100);
      expect(result).toContain('Processing $100');
      expect(result).toContain('crypto');
    });
  });

  describe('Factory Pattern Behavior', () => {
    it('should create different payment method instances', () => {
      const creditCard = new CreditCardPaymentCreator().createPaymentMethod();
      const paypal = new PayPalPaymentCreator().createPaymentMethod();
      const crypto = new CryptoPaymentCreator().createPaymentMethod();

      // Verify each is a different type
      expect(creditCard.getPaymentDetails()).toContain('Credit Card');
      expect(paypal.getPaymentDetails()).toContain('PayPal');
      expect(crypto.getPaymentDetails()).toContain('Crypto');
    });

    it('should handle payment validation', () => {
      const creators = [
        new CreditCardPaymentCreator(),
        new PayPalPaymentCreator(),
        new CryptoPaymentCreator()
      ];

      creators.forEach(creator => {
        expect(() => creator.executePayment(100)).not.toThrow();
      });
    });
  });
}); 