import { ConcreteClass1, ConcreteClass2 } from './implementation';

export const runTemplateMethodExample = (): void => {
  console.log('Template Method Pattern Example:');

  console.log('Same client code can work with different subclasses:');
  
  console.log('\nExecuting ConcreteClass1:');
  const class1 = new ConcreteClass1();
  class1.templateMethod();

  console.log('\nExecuting ConcreteClass2:');
  const class2 = new ConcreteClass2();
  class2.templateMethod();
}; 