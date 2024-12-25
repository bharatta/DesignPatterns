import { IPaymentMethodCreator } from '../interfaces/IPaymentMethodCreator';
import { IPaymentMethod } from '../interfaces/IPaymentMethod';
import { CreditCardPayment } from '../products/CreditCardPayment';

export class CreditCardPaymentCreator implements IPaymentMethodCreator {
  createPaymentMethod(): IPaymentMethod {
    return new CreditCardPayment();
  }

  executePayment(amount: number): string {
    const payment = this.createPaymentMethod();
    if (!payment.validatePayment()) {
      throw new Error('Invalid credit card payment');
    }
    return payment.processPayment(amount);
  }
} 