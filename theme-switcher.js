(() => {
  addEventListener("DOMContentLoaded", initThemeSwitcher);

  function initThemeSwitcher() {
    const themeSwitcher = document.getElementById("theme-switcher");

    if (!themeSwitcher) return;

    const buttons = themeSwitcher.querySelectorAll("button");

    for (const button of buttons) {
      button.addEventListener("click", () => {
        for (const otherButton of buttons) {
          otherButton.setAttribute("aria-checked", button === otherButton);
        }

        document.body.classList.toggle(
          "classic",
          button.dataset.value === "classic",
        );
      });
    }
  }
})();
