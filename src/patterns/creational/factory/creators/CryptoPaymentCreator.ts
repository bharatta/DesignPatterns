import { IPaymentMethodCreator } from '../interfaces/IPaymentMethodCreator';
import { IPaymentMethod } from '../interfaces/IPaymentMethod';
import { CryptoPayment } from '../products/CryptoPayment';

export class CryptoPaymentCreator implements IPaymentMethodCreator {
  createPaymentMethod(): IPaymentMethod {
    return new CryptoPayment();
  }

  executePayment(amount: number): string {
    const payment = this.createPaymentMethod();
    if (!payment.validatePayment()) {
      throw new Error('Invalid crypto payment');
    }
    return payment.processPayment(amount);
  }
} 