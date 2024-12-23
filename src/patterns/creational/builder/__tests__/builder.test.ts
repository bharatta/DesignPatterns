import { Director, ConcreteBuilder } from '../implementation';

describe('Builder Pattern', () => {
  let director: Director;
  let builder: ConcreteBuilder;

  beforeEach(() => {
    director = new Director();
    builder = new ConcreteBuilder();
    director.setBuilder(builder);
  });

  it('should build minimal product', () => {
    director.buildMinimalProduct();
    const product = builder.getProduct();
    expect(product.parts).toEqual(['PartA']);
  });

  it('should build full product', () => {
    director.buildFullProduct();
    const product = builder.getProduct();
    expect(product.parts).toEqual(['PartA', 'PartB', 'PartC']);
  });

  it('should build custom product', () => {
    builder.buildStepA();
    builder.buildStepC();
    const product = builder.getProduct();
    expect(product.parts).toEqual(['PartA', 'PartC']);
  });
}); 