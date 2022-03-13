import cycle, { FPS100 } from '../clock/cycle.js';

export default class Runner {
    async runModules(modules) {
      if (modules) {
        const l = modules.length;
        for (let i = 0; i < l; i++) {
          await this.runModule(modules[i]);
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
          console.log('\n');
          console.log(`%c${moduleNames.join(' / ')}`, titleStyle);
          await moduleInstance.main();
          await cycle(FPS100);
        }
        if (moduleInstance.modules) {
          await this.runModules(moduleInstance.modules);
        }
        moduleNames.pop();
      }
    }
  }
}

const titleStyle = [
  'font-family:system-ui',
  'font-size:1rem',
  'font-weight:bold',
].join(';');

const moduleNames = [];
