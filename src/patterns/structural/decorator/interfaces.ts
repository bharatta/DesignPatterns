export interface IComponent {
  operation(): string;
}

export interface IDecorator extends IComponent {
  component: IComponent;
} 