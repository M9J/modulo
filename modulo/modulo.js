import Runner from './core/runner.js';
import Modules from '../modules/modules.js';
// import { moduloContainer, moduloModule } from './ui/modulo-ui.js';

new Runner().runModules(Modules.reverse());

// const container = moduloContainer();
// const modules = [
//   moduloModule('Arithmetic', moduloModule('Hi')),
//   moduloModule('Palindrome', moduloModule('TextRev')),
// ];
// modules.forEach((module) => container.appendChild(module));
// const mui = container;
// document.body.appendChild(mui);
