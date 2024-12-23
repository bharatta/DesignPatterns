export * from './chain-of-responsibility/implementation';
export * from './command/implementation';
export * from './iterator/implementation';
export * from './mediator/implementation';
export * from './memento/implementation';
export * from './observer/implementation';
export * from './state/implementation';
export * from './template-method/implementation';
export * from './visitor/implementation';
export * from './interpreter/implementation';

export const runBehavioralPatterns = async (): Promise<void> => {
  console.log('\n=== Behavioral Patterns ===\n');

  // Chain of Responsibility Example
  console.log('--- Chain of Responsibility Pattern ---');
  await import('./chain-of-responsibility/example').then(m => m.runChainOfResponsibilityExample());

  // Command Example
  console.log('\n--- Command Pattern ---');
  await import('./command/example').then(m => m.runCommandExample());

  // Iterator Example
  console.log('\n--- Iterator Pattern ---');
  await import('./iterator/example').then(m => m.runIteratorExample());

  // Mediator Example
  console.log('\n--- Mediator Pattern ---');
  await import('./mediator/example').then(m => m.runMediatorExample());

  // Memento Example
  console.log('\n--- Memento Pattern ---');
  await import('./memento/example').then(m => m.runMementoExample());

  // Observer Example
  console.log('\n--- Observer Pattern ---');
  await import('./observer/example').then(m => m.runObserverExample());

  // State Example
  console.log('\n--- State Pattern ---');
  await import('./state/example').then(m => m.runStateExample());

  // Strategy Example
  console.log('\n--- Strategy Pattern ---');
  await import('./strategy/example').then(m => m.runStrategyExample());

  // Template Method Example
  console.log('\n--- Template Method Pattern ---');
  await import('./template-method/example').then(m => m.runTemplateMethodExample());

  // Visitor Example
  console.log('\n--- Visitor Pattern ---');
  await import('./visitor/example').then(m => m.runVisitorExample());

  // Interpreter Example
  console.log('\n--- Interpreter Pattern ---');
  await import('./interpreter/example').then(m => m.runInterpreterExample());
}; 