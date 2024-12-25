import { ISubscriber, IMessage, IEmailService } from '../interfaces';

// Single Responsibility: Handles email subscription logic
export class EmailSubscriber implements ISubscriber {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly emailService: IEmailService
  ) {}

  update(message: IMessage): void {
    this.emailService.sendEmail(this.email, message);
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
} 