import { TerminalExpression, OrExpression, AndExpression } from './implementation';

export const runInterpreterExample = (): void => {
  console.log('Interpreter Pattern Example:');

  // Rule: John and Mary are male and female
  const john = new TerminalExpression("John");
  const mary = new TerminalExpression("Mary");
  const isMale = new OrExpression(
    john,
    new TerminalExpression("Robert")
  );

  // Rule: Julie is married to John
  const julie = new TerminalExpression("Julie");
  const married = new AndExpression(julie, john);

  console.log(`John is male? ${isMale.interpret("John")}`);
  console.log(`Peter is male? ${isMale.interpret("Peter")}`);
  console.log(`Julie is married to John? ${married.interpret("Julie John")}`);
  console.log(`Julie is married to Mary? ${married.interpret("Julie Mary")}`);
}; 