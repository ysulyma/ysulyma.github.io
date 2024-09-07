"use strict";

(function () {

  var ractiveApis = new Map();
  var callCounter = 0;
  var returnPromises = {};

  function Ractive(iframe) {
    return new Promise(function (resolve, reject) {
      if (ractiveApis.has(iframe)) return resolve(ractiveApis.get(iframe));

      /* receive communication from the child */
      window.addEventListener('message', function (e) {
        if (e.source !== iframe.contentWindow) return;

        switch (e.data.type) {
          // receive callable API methods
          case 'apiDefinition':
            var api = {};

            e.data.methodNames.forEach(function (name) {
              api[name] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var callId = callCounter++;
                iframe.contentWindow.postMessage({ type: 'apiCall', callId: callId, methodName: name, arguments: args }, '*');
                return new Promise(function (resolve, reject) {
                  returnPromises[callId] = resolve;
                });
              };
            });

            Object.freeze(api);
            ractiveApis.set(iframe, api);

            // return API
            resolve(api);
            break;

          // receive returned value from child
          case 'apiReturn':
            var callId = e.data.callId;

            returnPromises[callId](e.data.value);
            delete returnPromises[callId];
            break;
        }
      });

      // establish communication with child
      function establish() {
        iframe.contentWindow.postMessage({ type: 'establish' }, '*');
      }

      if (iframe.contentDocument.readyState === 'complete') establish();else iframe.addEventListener('load', establish);
    });
  }

  Module.provide('ractive', Ractive);
})();

