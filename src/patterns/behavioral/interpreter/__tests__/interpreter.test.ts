import { TerminalExpression, OrExpression, AndExpression } from '../implementation';

describe('Interpreter Pattern', () => {
  let john: TerminalExpression;
  let mary: TerminalExpression;
  let julie: TerminalExpression;

  beforeEach(() => {
    john = new TerminalExpression("John");
    mary = new TerminalExpression("Mary");
    julie = new TerminalExpression("Julie");
  });

  it('should interpret terminal expressions correctly', () => {
    expect(john.interpret("John")).toBeTruthy();
    expect(john.interpret("Mary")).toBeFalsy();
  });

  it('should interpret OR expressions correctly', () => {
    const isMale = new OrExpression(john, new TerminalExpression("Robert"));
    
    expect(isMale.interpret("John")).toBeTruthy();
    expect(isMale.interpret("Robert")).toBeTruthy();
    expect(isMale.interpret("Mary")).toBeFalsy();
  });

  it('should interpret AND expressions correctly', () => {
    const married = new AndExpression(julie, john);
    
    expect(married.interpret("Julie John")).toBeTruthy();
    expect(married.interpret("Julie Mary")).toBeFalsy();
    expect(married.interpret("Julie")).toBeFalsy();
  });

  it('should handle complex expressions', () => {
    const isFamily = new OrExpression(
      new AndExpression(julie, john),
      new AndExpression(julie, mary)
    );
    
    expect(isFamily.interpret("Julie John")).toBeTruthy();
    expect(isFamily.interpret("Julie Mary")).toBeTruthy();
    expect(isFamily.interpret("John Mary")).toBeFalsy();
  });
}); 