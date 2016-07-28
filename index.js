require("babel-core/register");
require("babel-polyfill");
require("dotenv").config();

module.exports = require("./dist/index.js");
