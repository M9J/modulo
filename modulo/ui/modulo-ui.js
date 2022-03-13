import { divElement, textElement } from './dom.js';

export const moduloContainer = () => {
  const container = divElement('modulo-container');
  return container;
};

export const moduloModule = (moduleName, moduleContents) => {
  const moduloModule = divElement('modulo-module');
  const moduloTitle = divElement('modulo-title');
  const moduloContent = divElement('modulo-content');
  const moduleTitle = textElement(moduleName);
  moduloTitle.appendChild(moduleTitle);
  if (moduleContents) {
    moduleContents.forEach((moduleContent) => {
      moduloContent.appendChild(moduleContent);
    });
  }
  moduloModule.appendChild(moduloTitle);
  moduloModule.appendChild(moduloContent);
  return moduloModule;
};
