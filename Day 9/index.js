// import http from "http";
// import path from "path";
// import fs from "fs";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Create a server

// const server = http.createServer((req, res) => {
//   // if (req.url === "/") {
//   //   fs.readFile(
//   //     path.join(__dirname, "public", "index.html"),
//   //     (err, content) => {
//   //       if (err) throw err;
//   //       res.writeHead(200, { "Content-Type": "text/html" });
//   //       res.end(content);
//   //     }
//   //   );
//   // }
//   // if (req.url === "/api/users") {
//   //   const users = [
//   //     { name: "amit", age: 23 },
//   //     { name: "rohit", age: 40 },
//   //   ];
//   //   res.writeHead(200, { "Content-Type": "text/html" });
//   //   res.end(JSON.stringify(users));
//   // }

//   // const filepath = path.join(
//   //   __dirname,
//   //   "public",
//   //   req.url === "/" ? "index.html" : `${req.url}.html`
//   // );
//   let filepath = path.join(
//     __dirname,
//     "public",
//     req.url === "/" ? "index.html" : req.url
//   );
//   console.log(filepath);

//   // file extension
//   const extname = path.extname(filepath);

//   let contentType = "text/html";

//   switch (extname) {
//     case ".js":
//       contentType = "text/javascript";
//       break;
//     case ".css":
//       contentType = "text/css";
//       break;
//     case ".json":
//       contentType = "application/json";
//       break;
//     case ".png":
//       contentType = "image/png";
//       break;
//     case ".jpg":
//       contentType = "image/jpg";
//       break;
//   }

//   fs.readFile(filepath, (err, content) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         fs.readFile(
//           path.join(__dirname, "public", "error.html"),
//           (err, content) => {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(content, "utf8");
//           }
//         );
//       } else {
//         res.writeHead(500);
//         res.end(`Server Error: ${er.code}`);
//       }
//     } else {
//       res.writeHead(200, { "Content-Type": `${contentType}` });
//       res.end(content);
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const authetication = (req,res,next)=>{
  console.log('authenticated process');
  next();
};

const sendResponse = (req,res)=>{
  // console.log(req.body);
  // res.status(200);
  // res.json(req.body);
  throw new Error('BROKEN')
};

// app.use(authetication)

app.get('/',sendResponse);

app.post('/',sendResponse);
app.delete('/',sendResponse);
app.put('/',sendResponse);

app.listen(5000);
