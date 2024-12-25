import { IPaymentMethodCreator } from '../interfaces/IPaymentMethodCreator';
import { IPaymentMethod } from '../interfaces/IPaymentMethod';
import { PayPalPayment } from '../products/PayPalPayment';

export class PayPalPaymentCreator implements IPaymentMethodCreator {
  createPaymentMethod(): IPaymentMethod {
    return new PayPalPayment();
  }

  executePayment(amount: number): string {
    const payment = this.createPaymentMethod();
    if (!payment.validatePayment()) {
      throw new Error('Invalid PayPal payment');
    }
    return payment.processPayment(amount);
  }
} 