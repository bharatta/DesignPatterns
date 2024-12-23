import { 
  RealSubject, 
  Proxy, 
  VirtualProxy, 
  ProtectionProxy 
} from './implementation';

export const runProxyExample = (): void => {
  console.log('Proxy Pattern Example:');

  console.log('1. Basic Proxy:');
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  proxy.request();

  console.log('\n2. Virtual Proxy (Lazy Loading):');
  const virtualProxy = new VirtualProxy();
  console.log('First request:');
  virtualProxy.request();
  console.log('Second request:');
  virtualProxy.request();

  console.log('\n3. Protection Proxy:');
  const adminProxy = new ProtectionProxy(realSubject, true);
  const userProxy = new ProtectionProxy(realSubject, false);
  
  console.log('Admin access:');
  adminProxy.request();
  
  console.log('User access:');
  userProxy.request();
}; 