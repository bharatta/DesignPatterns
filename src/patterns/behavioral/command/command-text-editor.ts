import { Invoker, SimpleCommand, ComplexCommand, Receiver } from './implementation';

export const runCommandExample = (): void => {
  
  const invoker = new Invoker();
  const receiver = new Receiver();

  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

  console.log('\tClient: Running command pattern demo...');
  invoker.doSomethingImportant();

  console.log('\n\tClient: Running commands separately...');
  const simpleCommand = new SimpleCommand('Print this');
  simpleCommand.execute();
  simpleCommand.undo();

  const complexCommand = new ComplexCommand(receiver, 'Process data', 'Generate report');
  complexCommand.execute();
  complexCommand.undo();
}; 