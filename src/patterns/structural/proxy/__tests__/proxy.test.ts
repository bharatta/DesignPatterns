import { 
  RealSubject, 
  Proxy, 
  VirtualProxy, 
  ProtectionProxy 
} from '../implementation';

describe('Proxy Pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should work with basic proxy', () => {
    const realSubject = new RealSubject();
    const proxy = new Proxy(realSubject);
    
    proxy.request();

    expect(consoleSpy).toHaveBeenCalledWith('Proxy: Checking access prior to firing a real request.');
    expect(consoleSpy).toHaveBeenCalledWith('RealSubject: Handling request.');
    expect(consoleSpy).toHaveBeenCalledWith('Proxy: Logging the time of request.');
  });

  it('should implement lazy loading with virtual proxy', () => {
    const virtualProxy = new VirtualProxy();
    
    virtualProxy.request();

    expect(consoleSpy).toHaveBeenCalledWith('VirtualProxy: Creating RealSubject instance on first request.');
    expect(consoleSpy).toHaveBeenCalledWith('RealSubject: Handling request.');
  });

  it('should control access with protection proxy', () => {
    const realSubject = new RealSubject();
    
    const adminProxy = new ProtectionProxy(realSubject, true);
    const userProxy = new ProtectionProxy(realSubject, false);

    adminProxy.request();
    userProxy.request();

    expect(consoleSpy).toHaveBeenCalledWith('ProtectionProxy: Access granted.');
    expect(consoleSpy).toHaveBeenCalledWith('ProtectionProxy: Access denied.');
  });
}); 