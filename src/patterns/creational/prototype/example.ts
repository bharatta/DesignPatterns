import { Prototype, ComponentWithBackReference } from './implementation';

export const runPrototypeExample = (): void => {
  console.log('Prototype Pattern Example:');

  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();

  console.log('Primitive field values:');
  console.log(p1.primitive === p2.primitive);

  console.log('Component field values:');
  console.log(p1.component === p2.component);

  console.log('Circular reference values:');
  console.log(p1.circularReference === p2.circularReference);
  console.log(p1.circularReference.prototype === p2.circularReference.prototype);
}; 