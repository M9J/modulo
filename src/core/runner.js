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
    let i = 0, l = modules.length;
    while (i < l) {
      await runModule(modules[i]);
      ++i;
    }
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
  await sleep(1000)
  return true;
  
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}