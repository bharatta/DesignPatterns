export class StripeAPI {
  async createCharge(amountInCents: number, currency: string): Promise<{chargeId: string, succeeded: boolean}> {
    // Simulate API call
    return {
      chargeId: `CH-${Math.random().toString(36).substr(2, 9)}`,
      succeeded: true
    };
  }
} 