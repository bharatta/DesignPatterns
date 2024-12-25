// Product Interface
export interface IPaymentMethod {
  processPayment(amount: number): string;
  validatePayment(): boolean;
  getPaymentDetails(): string;
} 