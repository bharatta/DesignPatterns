import { ICommand, IReceiver, IInvoker } from './interfaces';

// Receiver
export class Receiver implements IReceiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

// Commands
export class SimpleCommand implements ICommand {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }

  public undo(): void {
    console.log(`SimpleCommand: Undoing print of (${this.payload})`);
  }
}

export class ComplexCommand implements ICommand {
  private receiver: IReceiver;
  private a: string;
  private b: string;

  constructor(receiver: IReceiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }

  public undo(): void {
    console.log('ComplexCommand: Undoing complex stuff.');
    console.log(`Undoing: ${this.b}, ${this.a}`);
  }
}

// Invoker
export class Invoker implements IInvoker {
  private onStart!: ICommand;
  private onFinish!: ICommand;

  public setOnStart(command: ICommand): void {
    this.onStart = command;
  }

  public setOnFinish(command: ICommand): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.onStart) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.onFinish) {
      this.onFinish.execute();
    }
  }
} 