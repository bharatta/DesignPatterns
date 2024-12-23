import { WordsCollection } from '../implementation';

describe('Iterator Pattern', () => {
  let collection: WordsCollection;

  beforeEach(() => {
    collection = new WordsCollection();
    collection.addItem('First');
    collection.addItem('Second');
    collection.addItem('Third');
  });

  it('should iterate forward through collection', () => {
    const iterator = collection.getIterator();
    const items: string[] = [];

    while (iterator.valid()) {
      items.push(iterator.next());
    }

    expect(items).toEqual(['First', 'Second', 'Third']);
  });

  it('should iterate backward through collection', () => {
    const iterator = collection.getReverseIterator();
    const items: string[] = [];

    while (iterator.valid()) {
      items.push(iterator.next());
    }

    expect(items).toEqual(['Third', 'Second', 'First']);
  });

  it('should return current item', () => {
    const iterator = collection.getIterator();
    expect(iterator.current()).toBe('First');
  });

  it('should return current position', () => {
    const iterator = collection.getIterator();
    expect(iterator.key()).toBe(0);
    iterator.next();
    expect(iterator.key()).toBe(1);
  });

  it('should rewind iterator', () => {
    const iterator = collection.getIterator();
    iterator.next();
    iterator.next();
    iterator.rewind();
    expect(iterator.key()).toBe(0);
    expect(iterator.current()).toBe('First');
  });
}); 