const erudaDevTools = JSON.stringify({
  displaySize: 100,
  theme: "Material Darker",
  transparency: 1
});
localStorage.setItem('eruda-dev-tools', erudaDevTools);
eruda.init();
eruda._devTools.toggle();