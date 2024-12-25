import { IEmailService, IMessage } from '../interfaces';

// Single Responsibility: Handles email sending logic
export class EmailService implements IEmailService {
  sendEmail(to: string, message: IMessage): void {
    console.log(`\t\tEmail sent to ${to}:`);
    console.log(`\t\tSubject: ${message.title}`);
    console.log(`\t\tContent: ${message.content}`);
    console.log(`\t\tDate: ${message.date.toLocaleString()}\n`);
  }
} 