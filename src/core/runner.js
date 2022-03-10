export default function run(modules) {
  const hasModules = Array.isArray(modules) 
    ? modules.length > 0 
    : false;
  if (hasModules) {
    modules.forEach(m => {
      let isEnabled = false;
      if (m.metadata) {
        isEnabled = m.metadata.isEnabled;
      }
      if (isEnabled) {
        console.log(`===== ${m.metadata.name} =====`);
        if (m.main && typeof m.main === "function") {
          m.main();
        }
      }
      
    });
  }
  
  
}
