import { WordsCollection } from './implementation';

export const runIteratorExample = (): void => {
  console.log('Iterator Pattern Example:');

  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  console.log('Straight traversal:');
  const iterator = collection.getIterator();
  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log('\nReverse traversal:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }

  console.log('\nDemonstrating rewind and current:');
  iterator.rewind();
  console.log('After rewind, current item:', iterator.current());
  console.log('Current position:', iterator.key());
}; 