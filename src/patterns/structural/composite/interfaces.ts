export interface IComponent {
  operation(): string;
  add(component: IComponent): void;
  remove(component: IComponent): void;
  getChild(index: number): IComponent;
  isComposite(): boolean;
} 