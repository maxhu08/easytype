export const insertCSS = (id: string, css: string) => {
  document.querySelector(`style[css-id="${id}"]`)?.remove();
  const styleEl = document.createElement("style");
  styleEl.setAttribute("css-id", id);
  styleEl.textContent = css;
  document.head.appendChild(styleEl);
};

export const removeCSS = (id: string) => {
  document.querySelector(`style[css-id="${id}"]`)?.remove();
};
