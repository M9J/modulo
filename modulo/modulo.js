import Runner from './core/runner.js';
import Modules from '../modules/modules.js';

// Runner
new Runner().runModules(
  Modules.reverse()
);
