import { IExpression } from './interfaces';

// Terminal Expression
export class TerminalExpression implements IExpression {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  public interpret(context: string): boolean {
    return context.includes(this.data);
  }
}

// Or Expression
export class OrExpression implements IExpression {
  private expr1: IExpression;
  private expr2: IExpression;

  constructor(expr1: IExpression, expr2: IExpression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public interpret(context: string): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

// And Expression
export class AndExpression implements IExpression {
  private expr1: IExpression;
  private expr2: IExpression;

  constructor(expr1: IExpression, expr2: IExpression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public interpret(context: string): boolean {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
} 