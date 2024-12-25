import { NewsletterPublisher } from './publishers/newsletter.publisher';
import { EmailSubscriber } from './subscribers/email.subscriber';
import { EmailService } from './services/email.service';
import { NewsletterMessage } from './models/message';

export const runObserverExample = (): void => {
  // Initialize services
  const emailService = new EmailService();

  // Create publisher (Subject)
  console.log('\n\t1. Creating Newsletter Publisher...');
  const newsletter = new NewsletterPublisher();

  // Create subscribers (Observers)
  console.log('\n\t2. Creating Subscribers...');
  const bharat = new EmailSubscriber('Bharat', 'bharat@example.com', emailService);
  const vijay = new EmailSubscriber('Vijay', 'vijay@example.com', emailService);
  const chirag = new EmailSubscriber('Chirag', 'chirag@example.com', emailService);

  // Subscribe to newsletter
  console.log('\n\t3. Adding Subscribers to Newsletter...');
  newsletter.attach(bharat);
  newsletter.attach(vijay);
  
  // Try to add same subscriber again (should show already exists message)
  console.log('\n\t4. Trying to add Vijay again (should fail)...');
  newsletter.attach(vijay);

  // First Newsletter
  console.log('\n\t5. Publishing First Newsletter...');
  const message = new NewsletterMessage(
    'Summer Sale!',
    'Get 50% off on all items.'
  );
  newsletter.publishNewsletter(message);

  // Add new subscriber
  console.log('\n\t6. Adding New Subscriber (Chirag)...');
  newsletter.attach(chirag);

  // Second Newsletter (now Bob will receive it too)
  console.log('\n\t7. Publishing Second Newsletter...');
  const secondMessage = new NewsletterMessage(
    'New Products',
    'Check out our latest collection!'
  );
  newsletter.publishNewsletter(secondMessage);

  // Unsubscribe Vijay
  console.log('\n\t8. Unsubscribing Vijay...');
  newsletter.detach(vijay);

  // Final Newsletter (only John and Bob should receive)
  console.log('\n\t9. Publishing Final Newsletter...');
  const finalMessage = new NewsletterMessage(
    'Exclusive Offer',
    'Special discount for loyal subscribers!'
  );
  newsletter.publishNewsletter(finalMessage);
}; 