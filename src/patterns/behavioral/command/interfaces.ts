export interface ICommand {
  execute(): void;
  undo(): void;
}

export interface IReceiver {
  doSomething(a: string): void;
  doSomethingElse(b: string): void;
}

export interface IInvoker {
  setOnStart(command: ICommand): void;
  setOnFinish(command: ICommand): void;
  doSomethingImportant(): void;
} 