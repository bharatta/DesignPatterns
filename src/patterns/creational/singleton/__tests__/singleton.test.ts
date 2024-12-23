import { Singleton } from '../implementation';

describe('Singleton Pattern', () => {
  it('should return the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should execute operations correctly', () => {
    const instance = Singleton.getInstance();
    expect(() => instance.someOperation()).not.toThrow();
  });
}); 