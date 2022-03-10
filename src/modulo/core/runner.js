export default class Runner {
  moduleNames = [];

  run(modules) {
    if (modules) {
      this.runModules(modules);
    }
  }

  async runModules(modules) {
    if (modules) {
      const l = modules.length;
      for (let i = 0; i < l; i++) await this.runModule(modules[i]);
    }
  }

  async runModule(module) {
    if (module) {
      const moduleInstance = new module();
      if (moduleInstance.main) {
        console.log('\n');
        console.log(
          `%c${moduleInstance.name}`,
          'font-family:system-ui;font-size:1rem;font-weight:bold'
        );
        moduleInstance.main();
      }
      if (moduleInstance.modules) {
        this.runModules(moduleInstance.modules);
      }
    }
  }
}