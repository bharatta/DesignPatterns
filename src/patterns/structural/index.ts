import { runPaymentAdapterExample } from './adapter/payment-adapter';
import { runBridgeExample } from './bridge/bridge-platform-abstraction';
import { runCompositeExample } from './composite/composite-tree-structure';
import { runDecoratorExample } from './decorator/component-decorator';
import { runVideoConverterExample } from './facade/video-converter';
import { runFlyweightExample } from './flyweight/flyweight-shared-state';
import { runProxyExample } from './proxy/resource-proxy';

export const runStructuralPatterns = async (): Promise<void> => {
  // Adapter Example
  console.log('1) Adapter Pattern');
  await runPaymentAdapterExample();

  // Bridge Example
  console.log('\n2) Bridge Pattern');
  await runBridgeExample();

  // Composite Example
  console.log('\n3) Composite Pattern');
  await runCompositeExample();

  // Decorator Example
  console.log('\n4) Decorator Pattern');
  await runDecoratorExample();

  // Facade Example
  console.log('\n5) Facade Pattern');
  await runVideoConverterExample();

  // Flyweight Example
  console.log('\n6) Flyweight Pattern');
  await runFlyweightExample();

  // Proxy Example
  console.log('\n7) Proxy Pattern');
  await runProxyExample();
}; 
