import cycle, { FPS100 } from '../clock/cycle.js';
import { textElement } from '../ui/dom.js';
import { moduloContainer, moduloModule } from '../ui/modulo-ui.js';

export default class Runner {
  async runModules(modules) {
    if (modules) {
      const l = modules.length;
      for (let i = 0; i < l; i++) {
        const relativePathPrefix = '../../modules';
        const modulePathCleaned = modules[i].substr(1);
        const modulePath = relativePathPrefix + modulePathCleaned;
        const module = await import(modulePath);
        await this.runModule(module.default);
      }
    }
  }

  async runModule(module) {
    if (module) {
      let isEnabled = false;
      const moduleInstance = new module();
      isEnabled = moduleInstance.isEnabled;
      if (isEnabled) {
        moduleNames.push(moduleInstance.name);
        if (moduleInstance.main) {
          // console.log('\n');
          // console.log(`%c${moduleNames.join(' / ')}`, titleStyle);
          await moduleInstance.main(
            moduloModule,
            textElement,
            moduloModules,
            () => this.updateUI()
          );
          // moduloModules.push(
          //   moduloModule(moduleInstance.name, [textElement()])
          // );
          // this.updateUI();
          await cycle(FPS100);
        }
        if (moduleInstance.modules) {
          await this.runSubmodules(moduleInstance.modules);
        }
        moduleNames.pop();
      }
    }
  }

  async runSubmodules(modules) {
    if (modules) {
      const l = modules.length;
      for (let i = 0; i < l; i++) {
        await this.runModule(modules[i]);
      }
    }
  }

  async updateUI() {
    const container = moduloContainer();
    moduloModules.forEach((module) => container.appendChild(module));
    const moduloUI = container;
    document.body.appendChild(moduloUI);
  }
}

const titleStyle = [
  'font-family:system-ui',
  'font-size:1rem',
  'font-weight:bold',
].join(';');

const moduleNames = [];
const moduloModules = [];
