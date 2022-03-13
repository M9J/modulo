export const divElement = (className) => {
  const div = document.createElement('div');
  div.className = className;
  return div;
};

export const textElement = (textContent) => {
  const text = document.createTextNode(textContent);
  return text;
};
