/*!
 * quickmaths v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

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

export { abs, ceil, init, max, min };
//# sourceMappingURL=index.mjs.map
