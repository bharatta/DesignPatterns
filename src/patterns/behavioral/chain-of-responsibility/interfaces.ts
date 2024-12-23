export interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: string): string | null;
}

export interface AbstractHandler extends IHandler {
  nextHandler: IHandler | null;
} 