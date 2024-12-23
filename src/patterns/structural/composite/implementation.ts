import { IComponent } from './interfaces';

// Leaf class
export class Leaf implements IComponent {
  public operation(): string {
    return 'Leaf';
  }

  public add(component: IComponent): void {
    throw new Error('Cannot add to a leaf');
  }

  public remove(component: IComponent): void {
    throw new Error('Cannot remove from a leaf');
  }

  public getChild(index: number): IComponent {
    throw new Error('Cannot get child from a leaf');
  }

  public isComposite(): boolean {
    return false;
  }
}

// Composite class
export class Composite implements IComponent {
  protected children: IComponent[] = [];

  public operation(): string {
    const results: string[] = [];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return `Branch(${results.join('+')})`;
  }

  public add(component: IComponent): void {
    this.children.push(component);
  }

  public remove(component: IComponent): void {
    const componentIndex = this.children.indexOf(component);
    if (componentIndex !== -1) {
      this.children.splice(componentIndex, 1);
    }
  }

  public getChild(index: number): IComponent {
    return this.children[index];
  }

  public isComposite(): boolean {
    return true;
  }
} 