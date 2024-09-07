"use strict";

(function () {

  var modules = {};
  var promises = {};

  var modulesSync = {};

  window.Module = {
    // async

    import: function _import(name) {
      if (!modules[name]) createModule(name);
      return modules[name];
    },
    provide: function provide(name, defn) {
      if (!modules[name]) createModule(name);
      promises[name](defn);
    },

    // sync
    require: function require(name) {
      return modulesSync[name];
    },
    export: function _export(name, defn) {
      modulesSync[name] = defn;
    }
  };

  function createModule(name) {
    modules[name] = new Promise(function (resolve, reject) {
      promises[name] = function (value) {
        resolve(value);
        delete promises[name];
      };
    });
  }
})();