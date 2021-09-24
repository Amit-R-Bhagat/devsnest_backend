const fs = require("fs");
const program = require("commander");

program.command("mkdir <dirname>").action((dirname) => {
  console.log(dirname, "was created");
});

program.command("mkfile <path> <content>").action((path, content) => {
  fs.writeFile(path, content, (err) => {
    if (err) throw err;
    console.log("file written");
  });
});

program.parse(process.argv);
// let x = process.argv[2];
// if (x == "create-dir") {
//   fs.mkdir(process.argv[3], (err) => {
//     if (err) throw err;
//     console.log(process.argv[3], "was created");
//   });
// }
