import { TerminalExpression, OrExpression, AndExpression } from './implementation';

export const runInterpreterExample = (): void => {

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

  console.log(`\tJohn is male? ${isMale.interpret("John")}`);
  console.log(`\tPeter is male? ${isMale.interpret("Peter")}`);
  console.log(`\tJulie is married to John? ${married.interpret("Julie John")}`);
  console.log(`\tJulie is married to Mary? ${married.interpret("Julie Mary")}`);
}; 