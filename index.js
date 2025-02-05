"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayValue = displayValue;
var fs = require("fs");
var handlebars = require("handlebars");
function displayValue(value) {
    console.log("".concat(value));
}
function renderTemplate(_a) {
    var templateName = _a.templateName, data = _a.data;
    var templatePath = "".concat(__dirname, "/templates/").concat(templateName, ".html");
    var templateSource = fs.readFileSync(templatePath, "utf8");
    var template = handlebars.compile(templateSource);
    return template(data);
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = { displayValue: displayValue, renderTemplate: renderTemplate };
}
