"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

  var api, parent;

  window.addEventListener('message', function (e) {
    var _api;

    switch (e.data.type) {
      case 'establish':
        parent = e.source;
        Module.provide('#parent', parent);
        break;
      case 'apiCall':
        parent.postMessage({
          type: 'apiReturn',
          callId: e.data.callId,
          value: (_api = api)[e.data.methodName].apply(_api, _toConsumableArray(e.data.arguments))
        }, '*');
        break;
    }
  });

  Module.import('#api').then(function (_) {
    api = _;
    Module.import('#parent').then(function (source) {
      source.postMessage({
        type: 'apiDefinition',
        methodNames: Object.keys(api)
      }, '*');
    });
  });
})();
