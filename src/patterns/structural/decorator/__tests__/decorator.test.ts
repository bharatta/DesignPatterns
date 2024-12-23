import { 
  ConcreteComponent, 
  ConcreteDecoratorA, 
  ConcreteDecoratorB 
} from '../implementation';

describe('Decorator Pattern', () => {
  it('should work with basic component', () => {
    const component = new ConcreteComponent();
    expect(component.operation()).toBe('ConcreteComponent');
  });

  it('should work with decorated component A', () => {
    const component = new ConcreteComponent();
    const decorator = new ConcreteDecoratorA(component);
    
    expect(decorator.operation()).toBe('ConcreteDecoratorA(ConcreteComponent)');
    expect(decorator.extraOperation()).toBe('Additional operation A');
  });

  it('should work with decorated component B', () => {
    const component = new ConcreteComponent();
    const decorator = new ConcreteDecoratorB(component);
    
    expect(decorator.operation()).toBe('ConcreteDecoratorB(ConcreteComponent)');
    expect(decorator.additionalBehavior()).toBe('Additional operation B');
  });

  it('should work with multiple decorators', () => {
    const component = new ConcreteComponent();
    const decoratorA = new ConcreteDecoratorA(component);
    const decoratorB = new ConcreteDecoratorB(decoratorA);
    
    expect(decoratorB.operation()).toBe(
      'ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))'
    );
  });
}); 