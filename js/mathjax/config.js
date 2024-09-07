"use strict";

(function () {
  MathJax.Ajax.config.path["Extra"] = "/js/mathjax";
  MathJax.Ajax.config.path["Contrib"] = "//cdn.mathjax.org/mathjax/contrib";

  MathJax.Hub.Config({
    // make mostly transparent
    showProcessingMessages: false,
    messageStyle: "none",
    showMathMenu: false,
    showMathMenuMSIE: false,

    // configure jaxes
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      processEscapes: true,
    },
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "action.js",
        "color.js",
        "[Extra]/annotations.js",
        //      "[Extra]/head.js"
        "[Contrib]/xyjax/xypic.js",
        "[Extra]/forminput.js",
      ],
    },
    "HTML-CSS": {
      availableFonts: ["TeX"], // STIX fonts (really anything other than TeX) are absolutely hideous
      EqnChunk: 1,
      EqnChunkFactor: 1,
      EqnChunkDelay: 10,
    },
  });

  MathJax.Hub.processSectionDelay = 0;

  MathJax.Ajax.loadComplete("[Extra]/config.js");
})();

