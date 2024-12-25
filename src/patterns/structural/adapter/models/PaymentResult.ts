export class PaymentResult {
  constructor(
    private readonly _success: boolean,
    private readonly _transactionId: string,
    private readonly _message: string
  ) {}

  get success(): boolean { return this._success; }
  get transactionId(): string { return this._transactionId; }
  get message(): string { return this._message; }
} 