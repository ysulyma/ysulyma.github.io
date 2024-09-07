(function(){

const TWOPI = 2 * Math.PI;

const input = $('#function-input');
const latex = $('#latex-span');

const settings = {
  showGraph: true,
  a: -2,
  b: 2,
  fn: x => Math.cos(x) + Math.sin(x) + 2,
  slices: 10
};

/* attach behaviors */
const MQ = MathQuill.getInterface(2); // for backcompat
const mathField = MQ.MathField(input, {
  spaceBehavesLikeTab: true, // configurable
  handlers: {
    enter() {
      try {
        const fn = math.compile(text(mathField.__controller.root));
        settings.fn = (x) => fn.eval({x});

        api3.update({fn: settings.fn});
        api2.update({fn: settings.fn});
        updateVolume();
      } catch (e) {

      }
    }
  }
});

$('textarea').setAttribute('tabindex', 1);

$('#input-a').addEventListener('change', e => {
  settings.a = parseFloat(e.target.value);
  api3.update({a: settings.a});
  api2.update({a: settings.a});
  updateVolume();
});

$('#input-b').addEventListener('change', e => {
  settings.b = parseFloat(e.target.value);
  api3.update({b: settings.b});
  api2.update({b: settings.b});
  updateVolume();
});

$('#slices').addEventListener('change', e => {
  settings.slices = parseFloat(e.target.value);
  api3.update({slices: settings.slices});
  updateVolume();
});

$('#graph-text').addEventListener('click', e => {
  settings.showGraph = true;
  updateGraphToggle();
  api3.update({showGraph: settings.showGraph});
});

$('#disks-text').addEventListener('click', e => {
  settings.showGraph = false;
  updateGraphToggle();
  api3.update({showGraph: settings.showGraph});
});

$('#toggle-graph').addEventListener('click', e => {
  settings.showGraph = !settings.showGraph;
  updateGraphToggle();
  api3.update({showGraph: settings.showGraph});
});

/* miscellaneous other init */
MathJax.Hub.Config({
  // make mostly transparent
  showProcessingMessages: false,
  messageStyle: 'none',
  showMathMenu: false,
  showMathMenuMSIE: false,
});
MathJax.Hub.processSectionDelay = 0;
MathJax.Hub.Queue(fixMathJax);
updateVolume();

/* helper functions */
function $(selector, context = document) {
  return context.querySelector(selector);
}

function updateGraphToggle() {
  $('#toggle-graph > rect').setAttribute('fill', settings.showGraph ? "#00AEFF" : "#5CC26D");
  $('#toggle-graph > circle').setAttribute('cx', settings.showGraph ? 20 : 60);
}

function updateVolume() {
  const {a, b, fn, slices} = settings;

  function estimateVolume(n) {
    const width = (b - a) / n;
    let volume = 0;
    for (let i = 0; i < n; ++i) {
      const p = a + i * width;

      volume += fn(p) * fn(p) * width * TWOPI / 2;
    }

    return volume;
  }

  MathJax.Hub.Queue(() => {
    MathJax.Hub.getAllJax('controls-right')[0].Text(`
      \\begin{align*}
        \\pi\\sum_{i=1}^{\\mathsf{\\#disks}} f(x_i)\\,\\Delta x &= ${estimateVolume(slices).toFixed(4)}\\\\
        \\pi\\int_a^b f(x)^2\\,dx &= ${estimateVolume(100000).toFixed(4)}
      \\end{align*}
    `);
  });
}

/* super hacky, may not work */
function text(node) {
  if (node.letter)
    return node.letter;
  if (node.ctrlSeq === '\\cdot ')
    return '*';
  if (node.blocks) {
    switch (node.ctrlSeq) {
      case '\\sqrt':
        return 'sqrt(' + text(node.blocks[0]) + ')';
      case '\\frac':
        return '(' + text(node.blocks[0]) + ') / (' + text(node.blocks[1]) + ')';
      case '_{...}^{...}':
        return '^(' + text(node.blocks[0]) + ')';
      case '\\left(':
        return '(' + text(node.blocks[0]) + ')';
      case '\\left|':
        return 'abs(' + text(node.blocks[0]) + ')';
    }
  }

  return node.foldChildren(node.ctrlSeq || '', function(latex, child) {
    return latex + text(child);
  });
}

function fixMathJax() {
  for (const style of Array.from(document.querySelectorAll('style'))) {
    if (!style.textContent.match(/.MathJax:focus/)) continue;

    const sheet = style.sheet;
    for (let i = 0; i < sheet.cssRules.length; ++i) {
      const rule = sheet.cssRules[i];
      if (rule.selectorText.match('.MathJax:focus')) {
        sheet.deleteRule(i);
        break;
      }
    }
  }
}

})();
