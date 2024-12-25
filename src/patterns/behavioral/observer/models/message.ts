import { IMessage } from '../interfaces';

// Single Responsibility: Represents a message
export class NewsletterMessage implements IMessage {
  constructor(
    public title: string,
    public content: string,
    public date: Date = new Date()
  ) {}
} 