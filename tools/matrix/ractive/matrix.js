"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {

  /* exported functions */
  var Matrix = {
    eigenvalues: function eigenvalues() {
      return solveQuadratic(1, -Matrix.trace.apply(Matrix, arguments), Matrix.det.apply(Matrix, arguments));
    },
    eigenvectors: function eigenvectors(a, b, c, d) {
      var _Matrix$eigenvalues = Matrix.eigenvalues(a, b, c, d);

      var _Matrix$eigenvalues2 = _slicedToArray(_Matrix$eigenvalues, 3);

      var ev1 = _Matrix$eigenvalues2[1];
      var ev2 = _Matrix$eigenvalues2[2];

      if (c !== 0) return [[ev1 - d, c], [ev2 - d, c]].map(normalize);
      if (b !== 0) return [[b, ev1 - a], [b, ev2 - a]].map(normalize);
      if (b === 0 && c === 0) return [[1, 0], [0, 1]];
    },
    det: function det(a, b, c, d) {
      return a * d - b * c;
    },
    trace: function trace(a, b, c, d) {
      return a + d;
    }
  };

  // export
  Module.provide('matrix', Matrix);

  /* helper functions */
  function normalize(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];

    var norm = Math.sqrt(a * a + b * b);
    if (norm === 0) return [a, b];

    return [a / norm, b / norm];
  }

  function solveQuadratic(a, b, c) {
    var disc = b * b - 4 * a * c;
    if (disc >= 0) {
      return ['real', (-b + Math.sqrt(disc)) / (2 * a), (-b - Math.sqrt(disc)) / (2 * a)];
    } else {
      var Re = -b / 2 * a,
          Im = Math.sqrt(-disc) / (2 * a);
      return ['complex', Re, Im];
    }
  }
})();