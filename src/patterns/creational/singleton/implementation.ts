import { ISingleton } from './interfaces';

export class Singleton implements ISingleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  someOperation(): void {
    console.log('Singleton operation executed');
  }
} 