"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Module.import('mathjax').then(function (MathJax) {

  var json = Symbol.for('console.json');

  var Rational = Module.require('rational'),
      FiniteField = Module.require('finite-field');

  var _Module$require = Module.require('utils');

  var dom = _Module$require.dom;
  var on = _Module$require.events.on;
  var _Module$require$selec = _Module$require.selectors;
  var $ = _Module$require$selec.$;
  var $$ = _Module$require$selec.$$;

  /* set things up */

  var ENTER = 13,
      LEFT = 37,
      UP = 38,
      RIGHT = 39,
      DOWN = 40;

  var matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

  var inputJax = MathJax.Hub.getAllJax("matrix")[0];

  /* attach behaviors */
  on($('#rows'), 'change', function (e) {
    var newRows = e.target.value;
    var cols = matrix.length === 0 ? 0 : matrix[0].length;

    while (matrix.length < newRows) {
      matrix.push(new Array(cols).fill(0));
    }while (matrix.length > newRows) {
      matrix.pop();
    }showMatrix();
  });
  
  on($('*[type="submit"]'), 'click', function(e) {
    e.preventDefault();
    
    showSteps();
  });

  on($('#cols'), 'change', function (e) {
    var newCols = e.target.value;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = matrix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var row = _step.value;

        while (row.length < newCols) {
          row.push(0);
        }while (row.length > newCols) {
          row.pop();
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    showMatrix();
  });

  on($('#input'), 'change', '.matrix-entry', function (e) {
    var _e$target$getAttribut = e.target.getAttribute('name').match(/^m(\d+)-(\d+)/).slice(1).map(function (x) {
      return parseInt(x);
    });

    var _e$target$getAttribut2 = _slicedToArray(_e$target$getAttribut, 2);

    var i = _e$target$getAttribut2[0];
    var j = _e$target$getAttribut2[1];

    matrix[i][j] = e.target.value;
  });

  on($('#input'), 'keydown', '.matrix-entry', function (e) {
    var _e$target$getAttribut3 = e.target.getAttribute('name').match(/^m(\d+)-(\d+)/).slice(1).map(function (x) {
      return parseInt(x);
    });

    var _e$target$getAttribut4 = _slicedToArray(_e$target$getAttribut3, 2);

    var i = _e$target$getAttribut4[0];
    var j = _e$target$getAttribut4[1];

    var rows = matrix.length,
        cols = rows === 0 ? 0 : matrix[0].length;

    switch (e.keyCode) {
      case ENTER:
        matrix[i][j] = e.target.value;
        showSteps();
        break;
      case LEFT:
        $('#m' + i + '-' + pMod(j - 1, cols)).select();
        break;
      case UP:
        $('#m' + pMod(i - 1, rows) + '-' + j).select();
        break;
      case RIGHT:
        $('#m' + i + '-' + pMod(j + 1, cols)).select();
        break;
      case DOWN:
        $('#m' + pMod(i + 1, rows) + '-' + j).select();
        break;
    }
  });

  /* startup */
  showMatrix();

  /* display methods */
  function showMatrix() {
    var latex = '\\begin{bmatrix}' + matrix.map(function (row, i) {
      return row.map(function (entry, j) {
        return '\\FormInput[1][matrix-entry][' + entry + ']{m' + i + '-' + j + '}';
      }).join(" & ");
    }).join("\\\\") + '\\end{bmatrix}';

    inputJax.Text(latex, function () {
      var rows = matrix.length,
          cols = rows === 0 ? 0 : matrix[0].length;

      for (var i = 0; i < rows; ++i) {
        for (var j = 0; j < cols; ++j) {
          $('#m' + i + '-' + j).setAttribute('tabindex', cols * i + j + 3);
        }
      }
    });
  }

  function showSteps() {
    /* display steps */
    var table = dom.elt('table');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = rowReduce(matrix, Rational)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2);

        var step = _step2$value[0];
        var explanation = _step2$value[1];

        var tr = dom.elt('tr');

        var matrixCell = dom.elt('td');
        matrixCell.innerHTML = '\\(' + step + '\\)';
        tr.appendChild(matrixCell);

        var explanationCell = dom.elt('td');
        explanationCell.innerHTML = explanation;
        tr.appendChild(explanationCell);

        table.appendChild(tr);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var div = $('#output');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }div.appendChild(table);

    MathJax.Hub.Queue(['Typeset', MathJax.Hub, div]);
  }

  function pMod(x, y) {
    return (x % y + y) % y;
  }
}).catch(console.error);