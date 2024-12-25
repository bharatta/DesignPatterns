import { IMediator, IComponent } from './interfaces';

// Base Component
export class BaseComponent implements IComponent {
  protected mediator: IMediator;

  constructor(mediator: IMediator | null = null) {
    this.mediator = mediator!;
  }

  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}

// Concrete Components
export class Component1 extends BaseComponent {
  public doA(): void {
    console.log('\t\tComponent 1 does A.');
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    console.log('\t\tComponent 1 does B.');
    this.mediator.notify(this, 'B');
  }
}

export class Component2 extends BaseComponent {
  public doC(): void {
    console.log('\t\tComponent 2 does C.');
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    console.log('\t\tComponent 2 does D.');
    this.mediator.notify(this, 'D');
  }
}

// Concrete Mediator
export class ConcreteMediator implements IMediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('\tMediator reacts on A and triggers following operations:');
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('\tMediator reacts on D and triggers following operations:');
      this.component1.doB();
      this.component2.doC();
    }
  }
} 