"use strict";
(() => {

MathJax.Ajax.config.path["Extra"] = "/js";
MathJax.Ajax.config.path["Contrib"] = "//cdn.mathjax.org/mathjax/contrib";

MathJax.Hub.Config({
  // make mostly transparent
  showProcessingMessages: false,
  messageStyle: 'none',
  showMathMenu: false,
  showMathMenuMSIE: false,

  // configure jaxes
  jax: ['input/TeX', 'output/HTML-CSS'],
  TeX: {
    extensions: [
      'AMSmath.js', 'AMSsymbols.js', 'action.js', 'color.js',
      "[Contrib]/xyjax/xypic.js",
      "http://cs.jsu.edu/mathjax-ext/contrib/forminput/forminput.js"
    ]
  },
  'HTML-CSS': {
    availableFonts: ['TeX'], // STIX fonts (really anything other than TeX) are absolutely hideous
    EqnChunk: 1,
    EqnChunkFactor: 1,
    EqnChunkDelay: 10
  }
});

MathJax.Ajax.loadComplete("[Extra]/config.js");

})();