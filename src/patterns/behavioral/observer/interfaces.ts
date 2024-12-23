export interface IObserver {
  update(subject: ISubject): void;
}

export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
  getState(): number;
} 