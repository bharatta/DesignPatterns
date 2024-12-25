import { runChainOfResponsibilityExample } from './chain-of-responsibility/chain-of-responsibility-food-chain';
import { runCommandExample } from './command/command-text-editor';
import { runIteratorExample } from './iterator/words-collection-iterator';
import { runMediatorExample } from './mediator/mediator-chat-room';
import { runMementoExample } from './memento/memento-editor-history';
import { runObserverExample } from './observer/newsletter-observer';
import { runStateExample } from './state/state-vending-machine';
import { runStrategyExample } from './strategy/sort-strategy-example';
import { runTemplateMethodExample } from './template-method/template-method-data-mining';
import { runVisitorExample } from './visitor/visitor-document-export';
import { runInterpreterExample } from './interpreter/language-interpreter';

export const runBehavioralPatterns = async (): Promise<void> => {
  
  console.log('01) Chain of Responsibility Pattern');
  await runChainOfResponsibilityExample();

  // Command Example
  console.log('\n02) Command Pattern');
  await runCommandExample();

  // Iterator Example
  console.log('\n03) Iterator Pattern');
  await runIteratorExample();

  // Mediator Example
  console.log('\n04) Mediator Pattern');
  await runMediatorExample();

  // Memento Example
  console.log('\n05) Memento Pattern');
  await runMementoExample();

  // Observer Example
  console.log('\n06) Observer Pattern');
  await runObserverExample();

  // State Example
  console.log('\n07) State Pattern');
  await runStateExample();

  // Strategy Example
  console.log('\n08) Strategy Pattern');
  await runStrategyExample();

  // Template Method Example
  console.log('\n09) Template Method Pattern');
  await runTemplateMethodExample();

  // Visitor Example
  console.log('\n10) Visitor Pattern');
  await runVisitorExample();

  // Interpreter Example
  console.log('\n11) Interpreter Pattern');
  await runInterpreterExample();
}; 