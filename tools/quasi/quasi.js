/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controls__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Graphic__ = __webpack_require__(3);




const { react: { bind }, selectors: { $ }, } = Module.require('utils');
class Quasi extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor(props) {
        super(props);
        bind(this, ['setColor']);
        this.state = {
            colors: {
                x: '#FFFFFF',
                y: '#FFFFFF',
                z: '#FFFFFF',
                w: '#FFFFFF',
                xy: '#5CC26D',
                yz: '#5CC26D',
                zw: '#5CC26D',
                xz: '#AE81FF',
                xw: '#AE81FF',
                yw: '#AE81FF',
                yzw: '#134E86',
                xzw: '#FC2030',
                xyw: '#FC2030',
                xyz: '#134E86'
            }
        };
    }
    setColor(name) {
        return (e) => {
            const colors = Object.assign({}, this.state.colors);
            colors[name] = e.target.value;
            this.setState({ colors });
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Graphic__["a" /* default */], { colors: this.state.colors }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Controls__["a" /* default */], { colors: this.state.colors, setColor: this.setColor })));
    }
}
__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Quasi, null), $('main'));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three__);


const aspectRatio = 1;
const { cos, sin, sqrt } = Math, TWOPI = 2 * Math.PI;
const len = 20;
const r = len * sqrt(3 / 8);
const vertices = {
    x: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](-len / 2, -len / sqrt(12), -len / sqrt(24)),
    y: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, len / sqrt(3), -len / sqrt(24)),
    z: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](len / 2, -len / sqrt(12), -len / sqrt(24)),
    w: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, len * sqrt(3 / 8))
};
class Graphic extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor(props) {
        super(props);
        this.meshRefs = {};
    }
    componentDidMount() {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.setup();
        this.populate();
        const render = () => {
            requestAnimationFrame(render);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        render();
        window.addEventListener('resize', () => {
            const { height, width } = this.container.getBoundingClientRect();
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        });
    }
    componentWillReceiveProps(newProps) {
        for (const key in newProps.colors) {
            if (this.meshRefs[key]) {
                window.meshRef = this.meshRefs[key];
                this.meshRefs[key].material.color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](newProps.colors[key]);
            }
        }
    }
    populate() {
        const keys = Object.keys(vertices), len = keys.length;
        for (let i = 0; i < len; ++i) {
            const geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](1);
            const material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: this.props.colors[keys[i]] });
            const mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
            mesh.position.copy(vertices[keys[i]]);
            this.scene.add(mesh);
            this.meshRefs[keys[i]] = mesh;
            for (let j = i + 1; j < len; ++j) {
                const curve = new __WEBPACK_IMPORTED_MODULE_1_three__["Curve"]();
                curve.getPoint = t => {
                    return vertices[keys[i]].clone().lerp(vertices[keys[j]], t);
                };
                const geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TubeGeometry"](curve, undefined, r / 20);
                const material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: this.props.colors[keys[i] + keys[j]] });
                const mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
                this.scene.add(mesh);
                this.meshRefs[keys[i] + keys[j]] = mesh;
                for (let k = j + 1; k < len; ++k) {
                    const triangle = new __WEBPACK_IMPORTED_MODULE_1_three__["Triangle"](vertices[keys[i]], vertices[keys[j]], vertices[keys[k]]);
                    const geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    geometry.vertices.push(triangle.a, triangle.b, triangle.c);
                    geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 1, 2));
                    geometry.computeFaceNormals();
                    const material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: this.props.colors[keys[i] + keys[j] + keys[k]], side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    const mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
                    this.scene.add(mesh);
                    this.meshRefs[keys[i] + keys[j] + keys[k]] = mesh;
                    continue;
                    const loader = new __WEBPACK_IMPORTED_MODULE_1_three__["FontLoader"]();
                    loader.load('./fonts/helvetiker_regular.typeface.json', (font) => {
                        const geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["TextGeometry"](faceName(i, j, k, keys), {
                            font: font,
                            size: 2,
                            height: 0.5
                        });
                        const material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xFF0000 });
                        const mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
                        const midpoint = triangle.midpoint();
                        mesh.position.set(0, 0, 0);
                        mesh.lookAt(midpoint);
                        mesh.position.copy(midpoint);
                        this.scene.add(mesh);
                    });
                }
            }
        }
    }
    setup() {
        this.setupRenderer();
        this.setupCamera();
        this.setupControls();
        this.setupLights();
    }
    setupCamera() {
        const { height, width } = this.container.getBoundingClientRect();
        const camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](45, width / height, 0.1, 1000);
        camera.up.set(0, 0, 1);
        camera.position.set(-27, -27, 21);
        camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        this.camera = camera;
    }
    setupControls() {
        const orbitControls = new __WEBPACK_IMPORTED_MODULE_1_three__["OrbitControls"](this.camera, this.renderer.domElement);
        orbitControls.enableKeys = false;
        this.controls = orbitControls;
    }
    setupLights() {
        const light = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0x404040);
        this.scene.add(light);
        const lights = [];
        lights[0] = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 1, 0);
        lights[1] = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 1, 0);
        lights[2] = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    }
    setupRenderer() {
        const renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true, antialias: true });
        const { height, width } = this.container.getBoundingClientRect();
        renderer.setSize(width, height);
        renderer.localClippingEnabled = true;
        this.renderer = renderer;
        this.container.appendChild(renderer.domElement);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "three-container", ref: node => this.container = node })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Graphic;

function typeset(node) {
    return new Promise((resolve, reject) => {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, node], resolve);
    });
}
;
function faceName(i, j, k, keys) {
    if (i === 0 && j === 1 && k == 2)
        return 'gf';
    if (i === 0 && j === 1 && k == 3)
        return '(hg)f';
    if (i === 0 && j === 2 && k == 3)
        return 'h(gf)';
    if (i === 1 && j === 2 && k == 3)
        return 'hg';
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const vertices = ['x', 'y', 'z', 'w'];
class Controls extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor(props) {
        super(props);
        MathJax.Hub.Register.StartupHook("Device-Independent Xy-pic Ready", function () {
            const { xypic } = MathJax.Extension, { AST } = xypic;
            AST.Modifier.Shape.SetColor = AST.Modifier.Subclass({
                preprocess(context, reversedProcessedModifiers) { },
                modifyShape(context, objectShape, restModifiers, color) {
                    objectShape = this.proceedModifyShape(context, objectShape, restModifiers);
                    return xypic.Shape.ChangeColorShape(decodeColor(color), objectShape);
                }
            });
            xypic.repositories.modifierRepository.put('color', AST.Modifier.Shape.SetColor());
            AST.Modifier.Shape.Alphabets.Augment({
                preprocess: function (context, reversedProcessedModifiers) {
                    if (this.alphabets.startsWith('color')) {
                        return xypic.repositories.modifierRepository.get('color').preprocess(context, reversedProcessedModifiers);
                    }
                    var modifier = xypic.repositories.modifierRepository.get(this.alphabets);
                    if (modifier !== undefined) {
                        return modifier.preprocess(context, reversedProcessedModifiers);
                    }
                    else {
                    }
                },
                modifyShape: function (context, objectShape, restModifiers) {
                    if (this.alphabets.startsWith('color')) {
                        return xypic.repositories.modifierRepository.get('color').modifyShape(context, objectShape, restModifiers, this.alphabets.substr(5));
                    }
                    var modifier = xypic.repositories.modifierRepository.get(this.alphabets);
                    if (modifier !== undefined) {
                        return modifier.modifyShape(context, objectShape, restModifiers);
                    }
                }
            });
        });
    }
    render() {
        const _ = (key) => `\\color{${this.props.colors[key]}}`;
        const _a = (key) => `@[color${encodeColor(this.props.colors[key])}]`;
        const controls = [
            ['Left mouse', 'Orbit'],
            ['Scroll wheel', 'Zoom'],
            ['Right mouse', 'Pan']
        ];
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("legend", null, "Vertices"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { id: "controls-vertices" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, range(vertices.length).map(i => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: i },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MJX, null, vertices[i])),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { onChange: this.props.setColor(vertices[i]), type: "color", value: this.props.colors[vertices[i]] })))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("legend", null, "Edges"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { id: "controls-edges" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, ['xy', 'yz', 'zw', 'xz', 'yw', 'xw'].map(edge => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: edge },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MJX, null, edge)),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { onChange: this.props.setColor(edge), type: "color", value: this.props.colors[edge] })))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("legend", null, "Faces"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { id: "controls-faces" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, ['yzw', 'xzw', 'xyw', 'xyz'].map(face => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: face },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MJX, null, face)),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { onChange: this.props.setColor(face), type: "color", value: this.props.colors[face] })))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "diagram" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MJX, null, `\\xymatrix{
          ${_('w')} w \\ar@{}[drrr]|(0.34){${_('xyw')}\\gamma} &&
          ${_('y')} y \\ar${_a('yw')}[ll]_-{${_('yw')} hg}
                      \\ar${_a('yw')}[rr]^-{${_('yw')} hg}
                      \\ar${_a('yz')}[dr]|-{${_('yz')} g}
                      \\ar@{}[dd]|(0.3){${_('xyz')}\\alpha}
                      \\ar@{}[dd]|(0.75){${_('xzw')}\\beta} &&
          ${_('w')} w\\\\
          & ${_('x')} x \\ar@{}[urrr]|(0.66){${_('yzw')}\\delta}
                        \\ar${_a('xw')}[ul]^-{${_('xw')} (hg)f}
                        \\ar${_a('xy')}[ur]|-{${_('xy')} f}
                        \\ar${_a('xz')}[rr]|-{${_('xz')} gf}
                        \\ar${_a('xw')}[dr]_-{${_('xw')} h(gf)} && ${_('z')} z
                        \\ar${_a('zw')}[dl]^-{${_('zw')} h}
                        \\ar${_a('zw')}[ur]_-{${_('zw')} h}\\\\
          && ${_('w')} w &
        }`)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { id: "controls" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("caption", null, "3D Controls"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, controls.map(([key, action]) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", { key: key },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", { scope: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("kbd", null, key)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, action))))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controls;

function encodeColor(color) {
    return color.toUpperCase().replace(/[#0-9]/g, (char) => {
        if (char === '#')
            return '';
        return String.fromCharCode('G'.charCodeAt(0) + parseInt(char));
    });
}
function decodeColor(color) {
    return '#' + color.replace(/[G-P]/g, (digit) => {
        return (digit.charCodeAt(0) - 'G'.charCodeAt(0)).toString();
    });
}
class MJX extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.span]);
    }
    async componentDidUpdate() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.span]);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { ref: node => this.span = node }, '\\(' + this.props.children + '\\)'));
    }
}
function range(n) {
    return new Array(n).fill(null).map((_, i) => i);
}
;


/***/ })
/******/ ]);