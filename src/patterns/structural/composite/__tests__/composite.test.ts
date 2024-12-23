import { Leaf, Composite } from '../implementation';

describe('Composite Pattern', () => {
  it('should work with leaf components', () => {
    const leaf = new Leaf();
    expect(leaf.operation()).toBe('Leaf');
    expect(leaf.isComposite()).toBe(false);
  });

  it('should work with composite components', () => {
    const tree = new Composite();
    const branch1 = new Composite();
    const leaf1 = new Leaf();
    const leaf2 = new Leaf();

    branch1.add(leaf1);
    branch1.add(leaf2);
    tree.add(branch1);

    expect(tree.operation()).toBe('Branch(Branch(Leaf+Leaf))');
    expect(tree.isComposite()).toBe(true);
  });

  it('should handle component removal', () => {
    const composite = new Composite();
    const leaf = new Leaf();
    
    composite.add(leaf);
    expect(composite.operation()).toBe('Branch(Leaf)');
    
    composite.remove(leaf);
    expect(composite.operation()).toBe('Branch()');
  });

  it('should throw error when trying to modify leaf', () => {
    const leaf = new Leaf();
    const anotherLeaf = new Leaf();

    expect(() => leaf.add(anotherLeaf)).toThrow('Cannot add to a leaf');
    expect(() => leaf.remove(anotherLeaf)).toThrow('Cannot remove from a leaf');
    expect(() => leaf.getChild(0)).toThrow('Cannot get child from a leaf');
  });
}); 