import { ISubject } from './interfaces';

export class RealSubject implements ISubject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}

export class Proxy implements ISubject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

// Additional Proxy Types for demonstration

// Virtual Proxy (Lazy Loading)
export class VirtualProxy implements ISubject {
  private realSubject: RealSubject | null = null;

  public request(): void {
    if (this.realSubject === null) {
      console.log('VirtualProxy: Creating RealSubject instance on first request.');
      this.realSubject = new RealSubject();
    }
    this.realSubject.request();
  }
}

// Protection Proxy
export class ProtectionProxy implements ISubject {
  private realSubject: RealSubject;
  private isAdmin: boolean;

  constructor(realSubject: RealSubject, isAdmin: boolean) {
    this.realSubject = realSubject;
    this.isAdmin = isAdmin;
  }

  public request(): void {
    if (this.isAdmin) {
      console.log('ProtectionProxy: Access granted.');
      this.realSubject.request();
    } else {
      console.log('ProtectionProxy: Access denied.');
    }
  }
} 