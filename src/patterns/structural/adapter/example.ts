import { Adaptee, Adapter } from './implementation';

export const runAdapterExample = (): void => {
  console.log('Adapter Pattern Example:');
  
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);

  console.log('Adaptee specific request:');
  console.log(adaptee.specificRequest());
  
  console.log('Adapter request:');
  console.log(adapter.request());
}; 