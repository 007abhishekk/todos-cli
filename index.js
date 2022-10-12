#! /usr/bin/env node

import { program } from 'commander';

import list from './commands/list.js';
import add from './commands/add.js';
import markDone from './commands/mark-done.js';

program
    .command('list')
    .description('Lists all TODOs')
    .action(list)

program
    .command('add <TASK>')
    .description('Adds a new task to TODOs')
    .action(add)

program
    .command('mark-done')
    .description('Mark tasks as done')
    .option('-t, --tasks <task...>', 'The tasks to mark done. If not specified, mark all done.')
    .action(markDone)

program.parse()