import { IPaymentMethod } from '../interfaces/IPaymentMethod';

export class CreditCardPayment implements IPaymentMethod {
  private cardNumber: string;
  private expiryDate: string;

  constructor() {
    this.cardNumber = '**** **** **** 1234';
    this.expiryDate = '12/25';
  }

  processPayment(amount: number): string {
    return `Processing $${amount} using Credit Card ending with ${this.cardNumber.slice(-4)}`;
  }

  validatePayment(): boolean {
    return true;
  }

  getPaymentDetails(): string {
    return `Credit Card ending in ${this.cardNumber.slice(-4)}, expires ${this.expiryDate}`;
  }
} 