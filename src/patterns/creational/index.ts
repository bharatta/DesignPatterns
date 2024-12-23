export * from './singleton/implementation';
export * from './factory/implementation';
export * from './abstract-factory/implementation';
export * from './builder/implementation';
export * from './prototype/implementation';

export const runCreationalPatterns = async (): Promise<void> => {
  console.log('\n=== Creational Patterns ===\n');
  
  // Singleton Example
  console.log('--- Singleton Pattern ---');
  await import('./singleton/example').then(m => m.runSingletonExample());
  
  // Factory Example
  console.log('\n--- Factory Pattern ---');
  await import('./factory/example').then(m => m.runFactoryExample());
  
  // Abstract Factory Example
  console.log('\n--- Abstract Factory Pattern ---');
  await import('./abstract-factory/example').then(m => m.runAbstractFactoryExample());
  
  //Builder Example
  console.log('\n--- Builder Pattern ---');
  await import('./builder/example').then(m => m.runBuilderExample());
  
  // Prototype Example
  console.log('\n--- Prototype Pattern ---');
  await import('./prototype/example').then(m => m.runPrototypeExample());
}; 