import { 
  RealSubject, 
  Proxy, 
  VirtualProxy, 
  ProtectionProxy 
} from './implementation';

export const runProxyExample = (): void => {

  console.log('\t1. Basic Proxy:');
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);
  proxy.request();

  console.log('\n\t2. Virtual Proxy (Lazy Loading):');
  const virtualProxy = new VirtualProxy();
  console.log('\t\tFirst request:');
  virtualProxy.request();
  console.log('\t\tSecond request:');
  virtualProxy.request();

  console.log('\n\t3. Protection Proxy:');
  const adminProxy = new ProtectionProxy(realSubject, true);
  const userProxy = new ProtectionProxy(realSubject, false);
  
  console.log('\t\tAdmin access:');
  adminProxy.request();
  
  console.log('\t\tUser access:');
  userProxy.request();
}; 