"use strict";

function rowReduce(matrix, field) {
  var _;

  var matrix = deepCopy(matrix);

  /* convert to our fields */
  for (let row of matrix) {
    for (let j = 0; j < row.length; ++j) row[j] = field.fromNumber(row[j]);
  }

  /* reduce matrix */
  var reduction = RREF(matrix);
  var steps = [];

  while (_ = reduction.next()) {
    let {done, value} = _;
    if (done) break;

    let [matrix, explanation] = value;
    steps.push([deepCopy(matrix), explanation]);
  }
  return steps.map(matrixToHtml);
}

function* RREF(matrix) {
  var rows = matrix.length, cols = (rows === 0 ? 0 : matrix[0].length);
  var size = Math.min(rows, cols);

  yield [matrix, {
    type: 'text',
    text: 'begin'
  }];

  var cursor = -1;
  for (let i = 0; i < rows; ++i) {
    ++cursor;
    if (cursor === cols) break;

    // find pivot row
    let pivotRow = -1;
    for (let a = i; a < rows; ++a) {
      if (!matrix[a][cursor].isZero()) {
        pivotRow = a;
        break;
      }
    }

    if (pivotRow === -1) {
      --i;
      continue;
    }

    if (pivotRow !== i) {
      swapRows(matrix, pivotRow, i);
      yield [matrix, {
        highlight: [pivotRow, i],
        pivot: [pivotRow, i],
        type: 'swap',
        i: i,
        j: pivotRow
      }];
    }

    let pivotEntry = matrix[i][cursor];

    for (let a = 0; a < rows; ++a) {
      if (a === i) continue;
      if (matrix[a][cursor].isZero()) continue;

      let scale = matrix[a][cursor].div(pivotEntry);
      subtractRow(matrix[a], matrix[i], scale);
      yield [matrix, {
        highlight: [a],
        pivot: [i, cursor],
        type: 'subtract',
        i: i,
        j: a,
        scale
      }];
    }

    if (!pivotEntry.isOne()) {
      scaleRow(matrix[i], pivotEntry.invert());
      yield [matrix, {
        highlight: [i],
        pivot: [i, cursor],
        type: 'scale',
        i: i,
        scale: pivotEntry.invert()
      }];
    }
  }

  yield [matrix, {
    type: 'text',
    text: 'finished'
  }];
}

function matrixToHtml([matrix, explanation]) {
  var {highlight, pivot} = explanation;
  if (pivot) var [pivotRow, pivotCol] = pivot;

  var latex = '\\begin{bmatrix}' + matrix.map((row, i) => {

    if (highlight && highlight.includes(i))
      row = row.map(x => `\\highlight ${x}`);

    if (pivot && pivotRow === i)
      row[pivotCol] = `\\pivot ${row[pivotCol]}`;

    return row.join(' & ');
  }).join("\\\\") + '\\end{bmatrix}';

  var expStr = '';
  let {i, j, scale, text} = explanation;
  switch (explanation.type) {
    case 'text':
      expStr = text;
      break;
    case 'scale':
      expStr = `scale row ${i+1} by \\(${scale}\\)`;
      break;
    case 'swap':
      expStr = `swap rows ${i+1} and ${j+1}`;
      break;
    case 'subtract':
     if (scale.isOne())
       expStr = `subtract row ${i+1} from row ${j+1}`;
     else
        expStr = `subtract \\(${scale}\\) times row ${i+1} from row ${j+1}`;
      break;
  }
  return [latex, expStr];
}

function elt(name) {
  return document.createElement(name);
}

function subtractRow(rowA, rowB, multiplier) {
  for (let i = 0; i < rowA.length; ++i) {
    rowA[i] = rowA[i].minus(rowB[i].times(multiplier));
  }
}

function scaleRow(row, multiplier) {
  for (let i = 0; i < row.length; ++i) {
    row[i] = row[i].times(multiplier);
  }
}

function deepCopy(obj) {
  if (typeof obj == 'object') {
    if (isArray(obj)) {
      var l = obj.length;
      var r = new Array(l);
      for (var i = 0; i < l; i++) {
        r[i] = deepCopy(obj[i]);
      }
      return r;
    } else {
      var r = obj.clone();
      r.constructor = obj.constructor;
      for (var k in obj) {
        r[k] = deepCopy(obj[k]);
      }
      return r;
    }
  }
  return obj;
}

function isArray(obj) {
  return 'Array' === obj.constructor.name;
}

function swapRows(matrix, a, b) {
  var _b = matrix[b];
  matrix[b] = matrix[a];
  matrix[a] = _b;
}
