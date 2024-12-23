export interface IMediator {
  notify(sender: object, event: string): void;
}

export interface IComponent {
  setMediator(mediator: IMediator): void;
} 