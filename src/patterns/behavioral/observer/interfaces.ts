// Single Responsibility: Each interface has one specific purpose

// Defines how a subscriber receives updates
export interface ISubscriber {
  update(message: IMessage): void;
}

// Defines how a publisher manages subscribers
export interface IPublisher {
  attach(subscriber: ISubscriber): void;
  detach(subscriber: ISubscriber): void;
  notify(message: IMessage): void;
}

// Defines message structure
export interface IMessage {
  title: string;
  content: string;
  date: Date;
}

// Defines email functionality
export interface IEmailService {
  sendEmail(to: string, message: IMessage): void;
} 