const UglifyJS = require('uglify-js');
const fs = require("fs")
var code = fs.readFileSync("./dist/applecake.js").toString();

var result = UglifyJS.minify(code);
fs.writeFileSync("./dist/applecake.min.js", result.code)