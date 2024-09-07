"use strict";

(() => {

var {
  events: {on},
  selectors: {$, $$}
} = Module.require('utils');
  
var length = 4,
    rows = [];

for (let i = 0; i <= length+1; ++i) {
  let cols = [];
  for (let j = 0; j <= length+1; ++j) {
    // decide the entry
    let col = [];
    if (i < j) {
      if (i === 0)
        col.push(`\\sdotf{${j-1}}`);
      else
        col.push(`\\sdot{${j-1}}{${i-1}}`);
    }
    else if (i === j) {
      col.push("\\zero");
    }
    if (i > j) {
      cols.push('');
      continue;
    }

    // cofibration arrows
    if (j <= length) col.push("\\ar@{ >->}[r]");

    // quotient arrows
    if (i < j && i <= length) col.push("\\ar[d]");
    
    // pushout decoration
    if (0 < i && i < j && i <= length) col.push("\\ar@<2pt>@{}[ul]|<<{\\Huge\\ulcorner}");
    
    // add
    cols.push(col.join(' '));
  }
  rows.push(cols.join(' & '));
}

var latex = rows.join("\\\\");

$('#Sdot').textContent = `\\[
\\newcommand{\\sdotf}[1]{X_{#1}}
\\Annotate[coords]{\\sdotf}{-1,#1}
\\newcommand{\\sdot}[2]{X_{#1}/X_{#2}}
\\Annotate[coords]{\\sdot}{#2,#1}
\\newcommand{\\zero}{\\bullet}
\\Annotate[coords]{\\zero}{0,0}

\\newdir{ >}{{}*!/-6pt/@{>}}
\\xymatrix{
  ${latex}
}
\\]`;

var decompositionJax;

// render mathjax
MathJax.Hub.Queue(
  ['Typeset', MathJax.Hub, $('#Sdot')],
  () => {
    decompositionJax = MathJax.Hub.getAllJax($('#decomposition'))[0];
    $$('[id^=MathJax][data-annotation_coords]').forEach(node => {
      var [i, j] = node.dataset.annotation_coords.split(',').map(_ => parseInt(_));
      on(node, 'mouseover', () => {
        colorCircle(i,j);
        highlightDecomposition(i, j);
        showDecomposition(i, j);
      });
    });
  }
);

// color the cirlce
function colorCircle(i, j) {
  var circles = $$('svg circle'),
      n = circles.length;

  for (let [k, circle] of circles.entries()) {
    var l = n - (k+1);
    circle.setAttribute('fill', (l <= i || j < l) ? 'white' : 'black');
  }
}

// highlight the decomposition
function highlightDecomposition(i, j) {
  for (let node of $$('.highlight')) node.classList.remove('highlight');
  
  for (let k of range(i+1, j+1)) {
    $(`[data-annotation_coords="${k-1},${k}"]`).classList.add('highlight');
  }
}

// show the layer decomposition
function showDecomposition(i, j) {
  var latex;
  if (i === j) {
    latex = '';
  } else {
    let decomp = range(i+1, j+1).map(k => layer(k-1, k)).reverse();
    latex = layer(i, j) + ' = ' + decomp.join(' + ');
  }
  
  // render mathjax
  decompositionJax.Text(latex);
  
  // display the X_j/X_i
  function layer(r, s) {
    if (r === -1) return `[X_{${s}}]`;
    return `[X_{${s}}/X_{${r}}]`;
  }
  
}

// array helper
function range(start, end) {
  return Array.apply(0, Array(end-start))
    .map(function (element, index) { 
      return index + start;  
  });
}

})();