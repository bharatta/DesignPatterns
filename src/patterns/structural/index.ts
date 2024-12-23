export * from './adapter/implementation';
export * from './bridge/implementation';
export * from './composite/implementation';
export * from './decorator/implementation';
export * from './facade/implementation';
export * from './flyweight/implementation';
export * from './proxy/implementation';

export const runStructuralPatterns = async (): Promise<void> => {
  console.log('\n=== Structural Patterns ===\n');

  // Adapter Example
  console.log('--- Adapter Pattern ---');
  await import('./adapter/example').then(m => m.runAdapterExample());

  // Bridge Example
  console.log('\n--- Bridge Pattern ---');
  await import('./bridge/example').then(m => m.runBridgeExample());

  // Composite Example
  console.log('\n--- Composite Pattern ---');
  await import('./composite/example').then(m => m.runCompositeExample());

  // Decorator Example
  console.log('\n--- Decorator Pattern ---');
  await import('./decorator/example').then(m => m.runDecoratorExample());

  // Facade Example
  console.log('\n--- Facade Pattern ---');
  await import('./facade/example').then(m => m.runFacadeExample());

  // Flyweight Example
  console.log('\n--- Flyweight Pattern ---');
  await import('./flyweight/example').then(m => m.runFlyweightExample());

  // Proxy Example
  console.log('\n--- Proxy Pattern ---');
  await import('./proxy/example').then(m => m.runProxyExample());
}; 