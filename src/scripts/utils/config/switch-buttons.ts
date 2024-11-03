export const switchButtons = (buttons: HTMLButtonElement[], attr: string) => {
  buttons.forEach((btn) => {
    buttons.forEach((btn) => {
      btn.setAttribute(`btn-option-type`, attr);
      btn.setAttribute("selected", "no");
      btn.classList.remove("bg-blue-500/20");
    });

    btn.onclick = () => {
      // disable other buttons
      buttons.forEach((btn) => {
        btn.setAttribute("selected", "no");
        btn.classList.remove("bg-blue-500/20");
      });

      btn.classList.add("bg-blue-500/20");
      btn.setAttribute("selected", "yes");
    };
  });
};
