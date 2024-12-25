import { ConcreteClass1, ConcreteClass2 } from './implementation';

export const runTemplateMethodExample = (): void => {
  
  console.log('\tSame client code can work with different subclasses:');
  
  console.log('\n\tExecuting ConcreteClass1:');
  const class1 = new ConcreteClass1();
  class1.templateMethod();

  console.log('\n\tExecuting ConcreteClass2:');
  const class2 = new ConcreteClass2();
  class2.templateMethod();
}; 