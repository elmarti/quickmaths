/*!
 * quickmaths v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["[libraryCamelCaseName]"] = {}));
})(this, (function (exports) { 'use strict';

  /* eslint-disable prettier/prettier */
  //@ts-ignore
  var Maths = require('./quickmaths.js');
  var init = function () { return Maths.init(); };
  //@ts-ignore
  var abs = function (x) {
      return Maths._Abs(x);
  };
  var ceil = function (x) {
      return Maths._Ceil(x);
  };
  var min = function (a, b) { return Maths._Min(a, b); };
  var max = function (a, b) { return Maths._Max(a, b); };

  exports.abs = abs;
  exports.ceil = ceil;
  exports.init = init;
  exports.max = max;
  exports.min = min;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
