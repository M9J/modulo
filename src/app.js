import Runner from './modulo/core/runner.js';
import Modules from '../modules/modules.js';

const runner = new Runner();
runner.runModules(Modules.reverse());
