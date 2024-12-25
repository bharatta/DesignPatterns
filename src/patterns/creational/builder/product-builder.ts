import { Director, ConcreteBuilder } from './implementation';

export const runBuilderExample = (): void => {
  
  const director = new Director();
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('\tBuilding minimal product:');
  director.buildMinimalProduct();
  builder.getProduct().listParts();

  console.log('\tBuilding full product:');
  director.buildFullProduct();
  builder.getProduct().listParts();

  console.log('\tBuilding custom product:');
  builder.buildStepA();
  builder.buildStepC();
  builder.getProduct().listParts();
}; 