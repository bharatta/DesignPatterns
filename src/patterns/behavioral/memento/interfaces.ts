export interface IMemento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

export interface IOriginator {
  save(): IMemento;
  restore(memento: IMemento): void;
}

export interface ICaretaker {
  backup(): void;
  undo(): void;
  showHistory(): void;
} 