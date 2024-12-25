import { PaymentDetails } from '../models';

export interface IPaymentValidator {
  validatePayment(details: PaymentDetails): boolean;
} 