import { Leaf, Composite } from './implementation';

export const runCompositeExample = (): void => {
 
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

  console.log('\tClient: Working with simple components:');
  const leaf = new Leaf();
  console.log(`\tRESULT: ${leaf.operation()}\n`);

  console.log('\tClient: Working with composite tree:');
  console.log('\tRESULT: ' + tree.operation());
}; 