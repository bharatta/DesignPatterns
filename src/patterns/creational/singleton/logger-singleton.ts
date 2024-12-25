import { Logger } from './logger';

export const runLoggerSingleton = (): void => {
  // Authentication logging
  const authLogger = Logger.getInstance();
  authLogger.info('User authentication started');
  authLogger.info('Validating credentials...');
  authLogger.error('Invalid password attempt for user: bharat@gmail.com');

  // Database operations logging
  const dbLogger = Logger.getInstance();
  dbLogger.info('Initializing database connection');
  dbLogger.warn('Connection pool reaching maximum capacity');
  dbLogger.error('Query timeout after 5000ms');

  // API request logging
  const apiLogger = Logger.getInstance();
  apiLogger.info('Incoming POST request to /api/users');
  apiLogger.info('Request processed successfully');
  apiLogger.warn('Rate limit threshold reached for IP: 192.168.1.1');

  // System monitoring
  const sysLogger = Logger.getInstance();
  sysLogger.info('System health check started');
  sysLogger.warn('Memory usage above 80%');
  sysLogger.error('Disk space critical: 95% used');

  // Verify singleton behavior
  console.log('All loggers are the same instance:', 
    authLogger === dbLogger && 
    dbLogger === apiLogger && 
    apiLogger === sysLogger
  );
}; 