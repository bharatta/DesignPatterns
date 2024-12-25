import { IPaymentMethod } from '../interfaces/IPaymentMethod';

export class CryptoPayment implements IPaymentMethod {
  private walletAddress: string;
  private cryptoType: string;

  constructor() {
    this.walletAddress = '0x1234...abcd';
    this.cryptoType = 'ETH';
  }

  processPayment(amount: number): string {
    return `Processing $${amount} worth of ${this.cryptoType} to wallet: ${this.walletAddress}`;
  }

  validatePayment(): boolean {
    // In real implementation, would verify wallet address and balance
    return true;
  }

  getPaymentDetails(): string {
    return `${this.cryptoType} wallet: ${this.walletAddress}`;
  }
} 