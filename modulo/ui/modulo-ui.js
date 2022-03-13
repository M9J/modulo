import { divElement, textElement } from './dom.js';

export const moduloContainer = () => {
  const container = divElement('modulo-container');
  return container;
};

export const moduloModule = (moduleName, moduleContent) => {
  const moduloModule = divElement('modulo-module');
  const moduloTitle = divElement('modulo-title');
  const moduloContent = divElement('modulo-content');
  const moduleTitle = textElement(moduleName);
  moduloTitle.appendChild(moduleTitle);
  if (moduleContent) moduloContent.appendChild(moduleContent);
  moduloModule.appendChild(moduloTitle);
  moduloModule.appendChild(moduloContent);
  return moduloModule;
};
