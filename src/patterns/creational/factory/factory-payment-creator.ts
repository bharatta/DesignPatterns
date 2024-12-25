import { CreditCardPaymentCreator } from './creators/CreditCardPaymentCreator';
import { CryptoPaymentCreator } from './creators/CryptoPaymentCreator';
import { PayPalPaymentCreator } from './creators/PayPalPaymentCreator';

// Example implementation
export const runPaymentProcess = (): void => {
  // Create the factories (creators)
  const creditCardProcessor = new CreditCardPaymentCreator();
  const paypalProcessor = new PayPalPaymentCreator();
  const cryptoProcessor = new CryptoPaymentCreator();

  try {
    // Using the factories to process payments
    console.log('\t1. ' + creditCardProcessor.executePayment(100));
    console.log('\t2. ' + paypalProcessor.executePayment(100));
    console.log('\t3. ' + cryptoProcessor.executePayment(100));

    // Demonstrating product creation and usage
    const creditCardPayment = creditCardProcessor.createPaymentMethod();
    const paypalPayment = paypalProcessor.createPaymentMethod();
    const cryptoPayment = cryptoProcessor.createPaymentMethod();

    console.log('\n\tPayment Methods Details:');
    console.log('\t\t- ' + creditCardPayment.getPaymentDetails());
    console.log('\t\t- ' + paypalPayment.getPaymentDetails());
    console.log('\t\t- ' + cryptoPayment.getPaymentDetails());

  } catch (error) {
    console.error('Payment processing failed:', error);
  }
}; 