export interface IExpression {
  interpret(context: string): boolean;
} 