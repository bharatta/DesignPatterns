import { IPaymentMethod } from '../interfaces/IPaymentMethod';

export class PayPalPayment implements IPaymentMethod {
  private email: string;

  constructor() {
    this.email = 'user@example.com';
  }

  processPayment(amount: number): string {
    return `Processing $${amount} using PayPal account: ${this.email}`;
  }

  validatePayment(): boolean {
    // In real implementation, would verify PayPal account status
    return true;
  }

  getPaymentDetails(): string {
    return `PayPal account: ${this.email}`;
  }
} 