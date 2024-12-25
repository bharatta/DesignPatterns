import { Logger } from '../logger';

describe('Logger Singleton Pattern', () => {
  it('should return the same instance', () => {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    expect(logger1).toBe(logger2);
  });

  it('should log info messages', () => {
    const logger = Logger.getInstance();
    const consoleSpy = jest.spyOn(console, 'log');
    
    logger.info('Test info message');
    
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T.*\] INFO: Test info message/)
    );
  });

  it('should log error messages', () => {
    const logger = Logger.getInstance();
    const consoleSpy = jest.spyOn(console, 'log');
    
    logger.error('Test error message');
    
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T.*\] ERROR: Test error message/)
    );
  });

  it('should log warn messages', () => {
    const logger = Logger.getInstance();
    const consoleSpy = jest.spyOn(console, 'log');
    
    logger.warn('Test warning message');
    
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T.*\] WARN: Test warning message/)
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
}); 