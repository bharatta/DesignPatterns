import { Prototype, ComponentWithBackReference } from './implementation';

export const runPrototypeExample = (): void => {
  
  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();

  console.log('\tPrimitive field values:',p1.primitive === p2.primitive);

  console.log('\tComponent field values:', p1.component === p2.component);

  console.log('\tCircular reference values1:', p1.circularReference === p2.circularReference);

  console.log('\tCircular reference values2:', p1.circularReference.prototype === p2.circularReference.prototype);
}; 