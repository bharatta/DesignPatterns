import { ILogger } from './interfaces';

export class Logger implements ILogger {
  private static instance: Logger;
  private logFile: string;

  private constructor() {
    this.logFile = 'app.log';
    this.info('Logger initialized');
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public info(message: string): void {
    this.log('INFO', message);
  }

  public error(message: string): void {
    this.log('ERROR', message);
  }

  public warn(message: string): void {
    this.log('WARN', message);
  }

  private log(level: string, message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${level}: ${message}`;
    console.log(logMessage);
  }
} 