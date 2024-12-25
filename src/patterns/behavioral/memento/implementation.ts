import { IMemento, IOriginator, ICaretaker } from './interfaces';

// Concrete Memento
export class ConcreteMemento implements IMemento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

// Originator
export class Originator implements IOriginator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`\tOriginator: My initial state is: ${state}`);
  }

  public doSomething(): void {
    console.log('\t\tOriginator: I\'m doing something important.');
    this.state = this.generateRandomString(30);
    console.log(`\t\tOriginator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () => charSet.charAt(Math.floor(Math.random() * charSet.length))).join('');
  }

  public save(): IMemento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: IMemento): void {
    this.state = memento.getState();
    console.log(`\t\tOriginator: My state has been changed to: ${this.state}`);
  }
}

// Caretaker
export class Caretaker implements ICaretaker {
  private mementos: IMemento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log('\n\tCaretaker: Saving Originator\'s state...');
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();
    console.log(`\t\tCaretaker: Restoring state to: ${memento!.getName()}`);
    this.originator.restore(memento!);
  }

  public showHistory(): void {
    console.log('\t\tCaretaker: Here\'s the list of mementos:');
    for (const memento of this.mementos) {
      console.log('\t\t\t', memento.getName());
    }
  }
} 