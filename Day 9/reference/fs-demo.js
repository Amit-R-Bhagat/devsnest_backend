import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written...");
//   }
// );

// Append File
// fs.appendFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "\nI love node js!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written...");
//   }
// );

// Read File
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename File
// fs.rename(
//   path.join(__dirname, "test", "hello.txt"),
//   path.join(__dirname, "test", "hell.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File rename to hell.txt");
//   }
// );
