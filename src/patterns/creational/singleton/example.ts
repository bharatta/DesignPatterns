import { Singleton } from './implementation';

export const runSingletonExample = (): void => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Are instances the same?:', instance1 === instance2);
  instance1.someOperation();
}; 