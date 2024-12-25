/**
 * Single Responsibility Principle (SRP)
 * This class is responsible only for maintaining payment details data.
 * 
 * Immutable value object pattern ensures data integrity.
 * 
 * Usage:
 * const payment = new PaymentDetails(100, "USD", "Order payment");
 * console.log(payment.amount); // 100
 */
export class PaymentDetails {
  constructor(
    private readonly _amount: number,
    private readonly _currency: string,
    private readonly _description: string
  ) {}

  get amount(): number { return this._amount; }
  get currency(): string { return this._currency; }
  get description(): string { return this._description; }
} 