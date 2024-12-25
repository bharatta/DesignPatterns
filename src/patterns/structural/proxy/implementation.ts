import { ISubject } from './interfaces';

export class RealSubject implements ISubject {
  public request(): void {
    console.log('\t\tRealSubject: Handling request.');
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
    console.log('\t\tProxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('\t\tProxy: Logging the time of request.');
  }
}

// Additional Proxy Types for demonstration

// Virtual Proxy (Lazy Loading)
export class VirtualProxy implements ISubject {
  private realSubject: RealSubject | null = null;

  public request(): void {
    if (this.realSubject === null) {
      console.log('\t\tVirtualProxy: Creating RealSubject instance on first request.');
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
      console.log('\t\tProtectionProxy: Access granted.');
      this.realSubject.request();
    } else {
      console.log('\t\tProtectionProxy: Access denied.');
    }
  }
} 