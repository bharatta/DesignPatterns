import { NewsletterPublisher } from '../publishers/newsletter.publisher';
import { EmailSubscriber } from '../subscribers/email.subscriber';
import { EmailService } from '../services/email.service';
import { NewsletterMessage } from '../models/message';

describe('Newsletter Observer Pattern', () => {
  let publisher: NewsletterPublisher;
  let emailService: EmailService;
  let consoleSpy: jest.SpyInstance;

  // Create test subscribers
  let bharat: EmailSubscriber;
  let vijay: EmailSubscriber;
  let chirag: EmailSubscriber;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    emailService = new EmailService();
    publisher = new NewsletterPublisher();

    // Initialize subscribers before each test
    bharat = new EmailSubscriber('Bharat', 'bharat@example.com', emailService);
    vijay = new EmailSubscriber('Vijay', 'vijay@example.com', emailService);
    chirag = new EmailSubscriber('Chirag', 'chirag@example.com', emailService);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('Subscription Management', () => {
    it('should add new subscribers successfully', () => {
      publisher.attach(bharat);
      expect(consoleSpy).toHaveBeenCalledWith('Subscriber added successfully.');
    });

    it('should prevent duplicate subscriptions', () => {
      publisher.attach(bharat);
      publisher.attach(bharat);
      
      // Verify first subscription succeeded and second was rejected
      expect(consoleSpy).toHaveBeenCalledWith('Subscriber added successfully.');
      expect(consoleSpy).toHaveBeenCalledWith('Subscriber already exists.');
    });

    it('should handle unsubscribe correctly', () => {
      publisher.attach(bharat);
      publisher.detach(bharat);
      
      expect(consoleSpy).toHaveBeenCalledWith('Subscriber removed successfully.');
    });

    it('should handle unsubscribe of non-existent subscriber', () => {
      publisher.detach(bharat);
      expect(consoleSpy).toHaveBeenCalledWith('Subscriber not found.');
    });
  });

  describe('Newsletter Notification', () => {
    it('should notify only subscribed users', () => {
      // Setup: Only John and Jane subscribe
      publisher.attach(bharat);
      publisher.attach(vijay);

      // Action: Publish newsletter
      const message = new NewsletterMessage('Test', 'Test content');
      publisher.publishNewsletter(message);

      // Assert: Check that only John and Jane received the newsletter
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('john@example.com'));
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('jane@example.com'));
      expect(consoleSpy).not.toHaveBeenCalledWith(expect.stringContaining('bob@example.com'));
    });

    it('should not notify unsubscribed users', () => {
      // Setup: John and Jane subscribe, then Jane unsubscribes
      publisher.attach(bharat);
      publisher.attach(vijay);
      publisher.detach(vijay);

      // Action: Publish newsletter
      const message = new NewsletterMessage('Test', 'Test content');
      publisher.publishNewsletter(message);

      // Assert: Check that only John received the newsletter
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('john@example.com'));
      expect(consoleSpy).not.toHaveBeenCalledWith(expect.stringContaining('jane@example.com'));
    });

    it('should notify new subscribers of subsequent newsletters', () => {
      // Setup: First only John subscribes
      publisher.attach(bharat);

      // First newsletter
      let message = new NewsletterMessage('First', 'First content');
      publisher.publishNewsletter(message);

      // Bob subscribes after first newsletter
      publisher.attach(chirag);

      // Second newsletter
      message = new NewsletterMessage('Second', 'Second content');
      publisher.publishNewsletter(message);

      // Clear previous console calls to make our assertions clearer
      consoleSpy.mockClear();

      // Assert: Both Bharat and Chirag should receive the second newsletter
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('bharat@example.com'));
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('chirag@example.com'));
    });
  });

  describe('Complete Notification Flow', () => {
    it('should handle a complex subscription scenario', () => {
      // 1. Initial subscribers
      publisher.attach(bharat);
      publisher.attach(vijay);

      // 2. First newsletter
      let message = new NewsletterMessage('First', 'First content');
      publisher.publishNewsletter(message);

      // Clear console to start fresh
      consoleSpy.mockClear();

      // 3. Jane unsubscribes, Bob subscribes
      publisher.detach(vijay);
      publisher.attach(chirag);

      // 4. Second newsletter
      message = new NewsletterMessage('Second', 'Second content');
      publisher.publishNewsletter(message);

      // 5. Verify final state
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('bharat@example.com'));
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('chirag@example.com'));
      expect(consoleSpy).not.toHaveBeenCalledWith(expect.stringContaining('vijay@example.com'));
    });
  });
}); 