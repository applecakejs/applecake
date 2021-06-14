const fs = require("fs");
const chalk = require("chalk");
let data = "";

const Pack = (arrayOfJsfiles, filenamedist) => {
  for (const file of arrayOfJsfiles) {
    let fileread = fs.readFileSync(file);
    data += fileread + "\n";

    console.log(chalk.cyanBright(`writing file ${file} is done`));
  }
  console.log("\n");
  console.log(chalk.greenBright("everything is done"));
  if (fs.existsSync("./dist")) {
    fs.rmdirSync("./dist", { recursive: true });
  }
  fs.mkdirSync("dist");
  fs.writeFileSync(`dist/${filenamedist}.js`, data);
};

module.exports = {
  Pack,
};
