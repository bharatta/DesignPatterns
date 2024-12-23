import { Command } from 'commander';
import chalk from 'chalk';
import { runCreationalPatterns } from './patterns/creational';
import { runStructuralPatterns } from './patterns/structural';
import { runBehavioralPatterns } from './patterns/behavioral';

const program = new Command();

program
  .version('1.0.0')
  .description('Design Patterns Examples in TypeScript')
  .option('-c, --creational', 'Run Creational Pattern Examples')
  .option('-s, --structural', 'Run Structural Pattern Examples')
  .option('-b, --behavioral', 'Run Behavioral Pattern Examples')
  .option('-a, --all', 'Run All Pattern Examples');

program.parse(process.argv);

const options = program.opts();

async function main() {
  console.log(chalk.blue('Design Patterns Examples'));
  
  if (options.all || options.creational) {
    console.log(chalk.yellow('\nRunning Creational Patterns:'));
    await runCreationalPatterns();
  }
  
  if (options.all || options.structural) {
    console.log(chalk.yellow('\nRunning Structural Patterns:'));
    await runStructuralPatterns();
  }
  
  if (options.all || options.behavioral) {
    console.log(chalk.yellow('\nRunning Behavioral Patterns:'));
    await runBehavioralPatterns();
  }
}

main().catch(console.error);
