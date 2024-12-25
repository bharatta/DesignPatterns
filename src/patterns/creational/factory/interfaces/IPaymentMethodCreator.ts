import { IPaymentMethod } from './IPaymentMethod';

// Creator (Factory) Interface
export interface IPaymentMethodCreator {
  createPaymentMethod(): IPaymentMethod;
  executePayment(amount: number): string;
} 