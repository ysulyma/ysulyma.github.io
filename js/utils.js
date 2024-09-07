"use strict";

(function () {

  var Utils = {
    // AJAX helper
    ajax: {
      request: function request(method, url, args) {
        return new Promise(function (resolve, reject) {
          // Instantiates the XMLHttpRequest
          var client = new XMLHttpRequest();
          var uri = url;

          if (args && !(args instanceof FormData) && (method === 'GET' || method === 'POST' || method === 'PUT')) {
            uri += '?';
            var argcount = 0;
            for (var key in args) {
              if (args.hasOwnProperty(key)) {
                if (argcount++) {
                  uri += '&';
                }
                uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
              }
            }
          }

          client.open(method, uri);
          //        client.setRequestHeader("X-CSRF-Token", csrfToken);

          if (args instanceof FormData) client.send(args);else client.send();

          client.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              // Performs the function "resolve" when this.status is equal to 2xx
              resolve(this.response);
            } else {
              // Performs the function "reject" when this.status is different than 2xx
              reject(this.statusText);
            }
          };
          client.onerror = function () {
            reject(this.statusText);
          };
        });
      },
      delete: function _delete(url, args) {
        return this.request('DELETE', url, args);
      },
      get: function get(url, args) {
        return this.request('GET', url, args);
      },
      post: function post(url, args) {
        return this.request('POST', url, args);
      }
    },

    /* dom helpers */
    dom: {
      elt: function elt(name) {
        return document.createElement(name);
      },
      text: function text(str) {
        return document.createTextNode(str);
      }
    },

    // mostly for delegated events à la jQuery
    events: {
      on: function on(element) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var type = args[0];
        var selector = args[1];
        var handler = args[2];

        if (element instanceof Array) return element.map(function (elt) {
          var _Utils$events;

          return (_Utils$events = Utils.events).on.apply(_Utils$events, [elt].concat(args));
        });
        if (args.length === 2) handler = selector, selector = null;

        if (selector) {
          element.addEventListener(type, function (e) {
            var target = e.target;


            while (target != element) {
              if (target.matches(selector)) {
                handler(e, target);
                return;
              }
              target = target.parentNode;
            }
          }, true);
        } else element.addEventListener(type, handler);
      }
    },

    // random shit that is good to have when dealing with fucking react
    react: {
      bind(o, methods) {
        for (const method of methods)
          o[method] = o[method].bind(o);
      }
    },

    // for querying the DOM
    selectors: {
      $: function $(selector) {
        var context = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

        return context.querySelector(selector);
      },
      $$: function $$(selector) {
        var context = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

        return Array.from(context.querySelectorAll(selector));
      }
    }
  };

  window.Utils = Utils;
  Module.export('utils', Utils);

  /* this is probably bad, but oh well. Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();