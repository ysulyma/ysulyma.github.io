(() => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  const objects = document.getElementsByTagName("object");
  
  const setTheme = () => {
    document.documentElement.classList.toggle("dark-theme", query.matches);
    syncSVGs(query.matches);
  };
  
  query.addEventListener("change", setTheme);
  addEventListener("DOMContentLoaded", setTheme);


  /**
   * Sync our CSS with external SVGs embedded using <object>.
   */
  async function syncSVGs(isDark) {
    if (!document.body)
      return;

    const colorLight = "#000";
    const colorDark = "#fff";
    
    for (const object of Array.from(objects)) {
      if (object.type !== "image/svg+xml")
        continue;

      objectLoaded(object).then(() => {
        const document = object.contentDocument;
        if (!document)
          return;

        const style = document.querySelector("style");

        if (!(style && style.sheet))
          return;

          console.log(style.sheet)

        const rule = Array.from(style.sheet.cssRules).find(rule => rule.type === rule.STYLE_RULE && rule.selectorText === ":root");
        
        if (!rule)
          return;
          

        rule.style.setProperty("--main", isDark ? colorDark : colorLight);
      });
    }
  }

  /**
   * Promise to check when an {@link HTMLObjectElement `<object>`} has loaded.
   */
  async function objectLoaded(object) {
    if (object.contentWindow) {
      return;
    }

    await new Promise((resolve) => {
      object.addEventListener("load", () => {
        resolve();
      });
    });
  }

})();
