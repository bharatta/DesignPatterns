import { Leaf, Composite } from './implementation';

export const runCompositeExample = (): void => {
  console.log('Composite Pattern Example:');

  // Create a tree structure
  const tree = new Composite();
  
  // Create simple components
  const branch1 = new Composite();
  branch1.add(new Leaf());
  branch1.add(new Leaf());

  const branch2 = new Composite();
  branch2.add(new Leaf());

  // Build the tree
  tree.add(branch1);
  tree.add(branch2);

  console.log('Client: Working with simple components:');
  const leaf = new Leaf();
  console.log(`RESULT: ${leaf.operation()}\n`);

  console.log('Client: Working with composite tree:');
  console.log(`RESULT: ${tree.operation()}`);
}; 