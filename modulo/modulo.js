import Runner from './core/runner.js';
import Modules from '../modules/modules.js';

new Runner().runModules(
  Modules.reverse()
);
