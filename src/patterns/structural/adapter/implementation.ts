import { ITarget, IAdaptee } from './interfaces';

// The class that needs to be adapted
export class Adaptee implements IAdaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb cificepS';
  }
}

// Adapter class that makes Adaptee's interface compatible with Target's interface
export class Adapter implements ITarget {
  private adaptee: IAdaptee;

  constructor(adaptee: IAdaptee) {
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
} 