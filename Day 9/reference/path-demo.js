import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(__filename);
var scriptName = path.basename(__filename);
// console.log(scriptName);

console.log(path.dirname(__filename));
// console.log(path.extname(filename));
// console.log(path.parse(__filename));

console.log(path.join(__dirname, "test", "index.html"));
