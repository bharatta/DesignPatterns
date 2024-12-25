import { IPublisher, ISubscriber, IMessage } from '../interfaces';

// Single Responsibility: Manages newsletter subscriptions and notifications
export class NewsletterPublisher implements IPublisher {
  private subscribers: Set<ISubscriber> = new Set();

  public attach(subscriber: ISubscriber): void {
    if (this.subscribers.has(subscriber)) {
      console.log('\t\tSubscriber already exists.');
      return;
    }
    this.subscribers.add(subscriber);
    console.log('\t\tSubscriber added successfully.');
  }

  public detach(subscriber: ISubscriber): void {
    if (!this.subscribers.has(subscriber)) {
      console.log('\t\tSubscriber not found.');
      return;
    }
    this.subscribers.delete(subscriber);
    console.log('\t\tSubscriber removed successfully.');
  }

  public notify(message: IMessage): void {
    console.log('\t\tNotifying all subscribers...');
    this.subscribers.forEach(subscriber => subscriber.update(message));
  }

  public publishNewsletter(message: IMessage): void {
    console.log(`\t\tPublishing newsletter: ${message.title}`);
    this.notify(message);
  }
} 