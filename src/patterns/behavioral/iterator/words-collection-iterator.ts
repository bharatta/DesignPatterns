import { WordsCollection } from './implementation';

export const runIteratorExample = (): void => {

  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  console.log('\tStraight traversal:');
  const iterator = collection.getIterator();
  while (iterator.valid()) {
    console.log('\t\t', iterator.next());
  }

  console.log('\n\tReverse traversal:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log('\t\t', reverseIterator.next());
  }

  console.log('\n\tDemonstrating rewind and current:');
  iterator.rewind();
  console.log('\t\tAfter rewind, current item:', iterator.current());
  console.log('\t\tCurrent position:', iterator.key());
}; 