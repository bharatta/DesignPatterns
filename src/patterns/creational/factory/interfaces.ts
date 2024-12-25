// === FACTORY PATTERN: INTERFACES ===

// Product Interface - Defines what any payment method product must implement
export interface IPaymentMethod {
  processPayment(amount: number): string;
  validatePayment(): boolean;
  getPaymentDetails(): string;
}

// Creator Interface - The Factory interface that all concrete factories must implement
export interface IPaymentMethodCreator {
  // Factory Method - This is the core of the Factory Pattern
  // It declares the method that will create payment method products
  createPaymentMethod(): IPaymentMethod;
  
  // Common operation using the created product
  executePayment(amount: number): string;
} 