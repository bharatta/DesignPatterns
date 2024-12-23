import { Director, ConcreteBuilder } from './implementation';

export const runBuilderExample = (): void => {
  console.log('Builder Pattern Example:');
  
  const director = new Director();
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('Building minimal product:');
  director.buildMinimalProduct();
  builder.getProduct().listParts();

  console.log('Building full product:');
  director.buildFullProduct();
  builder.getProduct().listParts();

  console.log('Building custom product:');
  builder.buildStepA();
  builder.buildStepC();
  builder.getProduct().listParts();
}; 