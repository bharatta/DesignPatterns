import { runLoggerSingleton } from './singleton/logger-singleton';
import { runPaymentProcess } from './factory/factory-payment-creator';
import { runAbstractFactoryExample } from './abstract-factory/furniture-factory';
import { runBuilderExample } from './builder/product-builder';
import { runPrototypeExample } from './prototype/document-prototype';

export const runCreationalPatterns = async (): Promise<void> => {
  // Singleton Example
  console.log('1) Singleton Pattern');
  await runLoggerSingleton();
  
  // Factory Example
  console.log('\n2) Factory Pattern');
  await runPaymentProcess();
  
  // Abstract Factory Example
  console.log('\n3) Abstract Factory Pattern');
  await runAbstractFactoryExample();
  
  //Builder Example
  console.log('\n4) Builder Pattern');
  await runBuilderExample();
  
  // Prototype Example
  console.log('\n5) Prototype Pattern');
  await runPrototypeExample();
}; 