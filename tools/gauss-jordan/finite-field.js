"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FiniteField(p) {
  var Fp = function () {
    function Fp(value) {
      _classCallCheck(this, Fp);

      this.value = (value % p + p) % p;
    }

    _createClass(Fp, [{
      key: Symbol.toPrimitive,
      value: function value(hint) {
        if (hint == "number") {
          throw Error();
        }
        if (hint == "string") {
          return "" + this.value;
        }
        return true;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Fp(this.value);
      }
    }, {
      key: "isOne",
      value: function isOne() {
        return this.value === 1;
      }
    }, {
      key: "isZero",
      value: function isZero() {
        return this.value === 0;
      }
    }, {
      key: "plus",
      value: function plus(y) {
        return new Fp(this.value + y.value);
      }
    }, {
      key: "minus",
      value: function minus(y) {
        return new Fp(this.value - y.value);
      }
    }, {
      key: "times",
      value: function times(y) {
        return new Fp(this.value * y.value);
      }
    }, {
      key: "div",
      value: function div(y) {
        return this.times(y.invert());
      }
    }, {
      key: "invert",
      value: function invert(y) {
        var value = void 0;
        if (this.value === 0) throw Error();
        if (this.value === 1) value = 1;
        if (this.value === 2) value = 3;
        if (this.value === 3) value = 2;
        if (this.value === 4) value = 4;
        return new Fp(value);
      }
    }], [{
      key: "fromNumber",
      value: function fromNumber(x) {
        return new Fp(x);
      }
    }]);

    return Fp;
  }();

  // return class instance


  return Fp;
}

Module.export('finite-field', FiniteField);