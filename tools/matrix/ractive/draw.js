"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Module.import('matrix').then(function (Matrix) {

  /* various helper constants */
  var TWOPI = 2 * Math.PI,
      DEG = 360 / TWOPI;

  var cos = Math.cos;
  var sin = Math.sin;
  var max = Math.max;
  var min = Math.min;
  var pow = Math.pow;
  var _THREE = THREE;
  var Color = _THREE.Color;
  var Vector3 = _THREE.Vector3;
  var Matrix4 = _THREE.Matrix4;
  var Mesh = _THREE.Mesh;
  var MeshBasicMaterial = _THREE.MeshBasicMaterial;
  var MeshFaceMaterial = _THREE.MeshFaceMaterial;
  var PlaneGeometry = _THREE.PlaneGeometry;

  /* data object that we use */

  var data = {
    eigenvectors: [[1, 0], [0, 1]]
  };

  /* set up */
  var mathbox = mathBox({
    plugins: ['core', 'controls', 'cursor'],
    controls: {
      klass: THREE.OrbitControls
    }
  });

  var three = mathbox.three;


  three.camera.position.set(0, 0, 3);
  three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);

  var view = mathbox.set({
    focus: 3
  }).cartesian({
    range: [[-2, 2], [-2, 2], [-1, 1]],
    scale: [2, 2, 2]
  });

  view.axis();
  view.axis({ axis: 2 });

  view.grid({
    divideX: 8,
    width: 1,
    opacity: 0.5,
    zBias: -5
  });

  // eigenvectors
  var eigenColors = ['#FF0000', '#0059FF'];

  var _loop = function _loop(i) {
    view.interval({
      expr: function expr(emit) {
        if (!data.eigenvectors) return;

        emit(0, 0);
        emit.apply(undefined, _toConsumableArray(data.eigenvectors[i]));
      },

      channels: 2,
      items: 2
    }).vector({
      end: true,
      width: 3,
      color: eigenColors[i]
    });
  };

  for (var i = 0; i < data.eigenvectors.length; ++i) {
    _loop(i);
  }

  var material = new MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture("./weird.jpg"),
    side: THREE.DoubleSide
  });

  var height = 2,
      width = 2;
  var geometry = new THREE.PlaneGeometry(width, height);

  /*
  // touch up the faceVertexUvs so we don't get a mirroring effect
  for (let i = 0, len = geometry.faces.length; i < len; i++) {
      let face = geometry.faces[i].clone();
      face.materialIndex = 1;
      geometry.faces.push(face);
      geometry.faceVertexUvs[0].push(geometry.faceVertexUvs[0][i].slice(0));
  }
  
  {
    let fvuvs = geometry.faceVertexUvs[0],
        topLeft = fvuvs[2][0],
        topRight = fvuvs[2][2],
        botLeft = fvuvs[2][1],
        botRight = fvuvs[3][1];
  
    // swap topLeft and topRight
    fvuvs[2][0] = topRight;
    fvuvs[2][2] = topLeft, fvuvs[3][2] = topLeft;
  
    // swap botLeft and botRight
    fvuvs[2][1] = botRight, fvuvs[3][0] = botRight;
    fvuvs[3][1] = botLeft;
  }*/

  // image
  var image = new Mesh(geometry, material);

  //image.overdraw = true;

  image.matrixAutoUpdate = false;

  three.scene.add(image);

  /* exported API */
  Module.provide('#api', {
    // update matrix entries

    updateMatrix: function updateMatrix(_ref) {
      var a = _ref.a;
      var b = _ref.b;
      var c = _ref.c;
      var d = _ref.d;

      // THREE.js positions objects from their center, compute the coordinates of the corner
      var x = 0,
          //(a+b)/2,
      y = 0; //(c+d)/2;

      // THREE.js uses some fucked up matrix order...
      image.matrix.set(
        a, c, 0, 0,
        b, d, 0, 0,
        0, 0, 1, 0,
        x, y, 0, 1
      ).transpose();

      // eigenvectors

      var _Matrix$eigenvalues = Matrix.eigenvalues(a, b, c, d);

      var _Matrix$eigenvalues2 = _slicedToArray(_Matrix$eigenvalues, 1);

      var evType = _Matrix$eigenvalues2[0];

      if (evType === 'real') data.eigenvectors = Matrix.eigenvectors(a, b, c, d);else data.eigenvectors = undefined;
    },


    // change the image
    updateImage: function updateImage(url) {
      image.material.map = THREE.ImageUtils.loadTexture(url);
      image.material.needsUpdate = true;
    },
    computeValues: function computeValues() {
      return {
        determinant: Matrix.det.apply(Matrix, arguments),
        eigenvalues: Matrix.eigenvalues.apply(Matrix, arguments)
      };
    }
  });
});