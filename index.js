"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayValue = displayValue;
exports.helloWorldFunc = helloWorldFunc;
function displayValue(value) {
    console.log("".concat(value));
}
function helloWorldFunc(value) {
    console.log("Hello world test ".concat(value));
}
// CommonJS support
if (typeof module !== "undefined" && module.exports) {
    module.exports = { displayValue: displayValue, helloWorldFunc: helloWorldFunc };
}
