const fs = require("fs");
let data = "";

const Pack = (arrayOfJsfiles , dist , version) => {

  for (const file of arrayOfJsfiles) {
    let fileread = fs.readFileSync(file);
    data += fileread + "\n";
    console.log(`writing file ${file} is done`);
  }
  console.log("\n");
  console.log("everything is done");
  fs.writeFileSync(`${dist} ${version}.js`, data);
};

module.exports = {
    Pack
}