(() => {
  window.MathJax = {
    loader: {
      load: [
        "[custom]/annotations.js",
        "[custom]/brutalnewcommand.js",
        "[custom]/forminput.js",
        "[custom]/load-head.js",
        "[tex]/color",
        "[tex]/html",
        "[xyjax]/xypic.js",
      ],
      paths: {
        custom: "https://cdn.jsdelivr.net/gh/ysulyma/mathjax-extensions/",
        xyjax: "https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/",
      },
    },
    startup: {
      typeset: false, // don't perform initial typeset
    },
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      packages: {
        "[+]": [
          "annotate",
          "brutalnewcommand",
          "color",
          "html",
          "input",
          "load-head",
          "xypic",
        ],
      },
    },
  };
})();
