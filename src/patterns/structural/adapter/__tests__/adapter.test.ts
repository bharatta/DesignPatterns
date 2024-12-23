import { Adaptee, Adapter } from '../implementation';

describe('Adapter Pattern', () => {
  it('should adapt the Adaptee interface to Target interface', () => {
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);

    expect(adaptee.specificRequest()).toBe('.eetpadA eht fo roivaheb cificepS');
    expect(adapter.request()).toBe('Adapter: (TRANSLATED) Specific behavior of the Adaptee.');
  });
}); 