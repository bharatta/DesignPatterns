import { IObserver, ISubject } from './interfaces';

// Concrete Subject
export class ConcreteSubject implements ISubject {
  private state: number = 0;
  private observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log('Subject: Observer has been attached already.');
      return;
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Subject: Nonexistent observer.');
      return;
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log('\nSubject: I\'m doing something important.');
    this.state = Math.floor(Math.random() * 10);
    console.log(`Subject: My state has changed to: ${this.state}`);
    this.notify();
  }

  public getState(): number {
    return this.state;
  }
}

// Concrete Observers
export class ConcreteObserverA implements IObserver {
  public update(subject: ISubject): void {
    if (subject.getState() < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

export class ConcreteObserverB implements IObserver {
  public update(subject: ISubject): void {
    if (subject.getState() >= 3) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
} 