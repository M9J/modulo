export default async function run(modules) {
  const hasModules = Array.isArray(modules) 
    ? modules.length > 0 
    : false;
  if (hasModules) {
    runModules(modules);
  }
}

async function runModules(modules) {
  if (modules) {
    modules.forEach(async (module) => {
      await runModule(module);
    });
  }
}

async function runModule(module) {
  if (module) {
      let isEnabled = false;
      if (module.metadata) {
        isEnabled = module.metadata.isEnabled;
      }
      if (isEnabled) {
        console.log(`===== ${module.metadata.name} =====`);
        if (module.main && typeof module.main === "function") {
          module.main();
        }
      }
  }
  await new Promise(r => setTimeout(r, 3000));
  return true;
  
}