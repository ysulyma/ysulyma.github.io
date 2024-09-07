"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rational = function () {
  function Rational(a, b) {
    _classCallCheck(this, Rational);

    if (b === 0) throw Error;

    var _reduce = reduce(a, b);

    var _reduce2 = _slicedToArray(_reduce, 2);

    a = _reduce2[0];
    b = _reduce2[1];


    this.a = a;
    this.b = b;

    if (Math.sign(b) === -1) {
      this.a *= -1;
      this.b *= -1;
    }
  }

  _createClass(Rational, [{
    key: Symbol.toPrimitive,
    value: function value(hint) {
      if (hint == "number") {
        return this.a / this.b;
      }
      if (hint == "string") {
        if (this.b === 1) return "" + this.a;
        return this.a + "/" + this.b;
      }
      return true;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Rational(this.a, this.b);
    }
  }, {
    key: "isOne",
    value: function isOne() {
      return this.a === this.b;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      return this.a === 0;
    }
  }, {
    key: "plus",
    value: function plus(y) {
      return new Rational(this.a * y.b + this.b * y.a, this.b * y.b);
    }
  }, {
    key: "minus",
    value: function minus(y) {
      return new Rational(this.a * y.b - this.b * y.a, this.b * y.b);
    }
  }, {
    key: "times",
    value: function times(y) {
      return new Rational(this.a * y.a, this.b * y.b);
    }
  }, {
    key: "div",
    value: function div(y) {
      return new Rational(this.a * y.b, this.b * y.a);
    }
  }, {
    key: "invert",
    value: function invert(y) {
      return new Rational(this.b, this.a);
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(num) {
      return new Rational(num, 1);
    }
  }]);

  return Rational;
}();

Module.export('rational', Rational);

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}