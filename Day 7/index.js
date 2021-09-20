const express = require("express");
const app = express();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "amit",
  port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CRUD Operations using pg DB.
// app.get("/", (req, res) => {
//   pool.query("SELECT * FROM users;", (err, result) => {
//     if (err) throw err;
//     res.json(result.rows);
//   });
// });

// app.post("/", (req, res) => {
//   pool.query(
//     "SELECT * FROM users WHERE email=$1",
//     [req.body.email],
//     (err, result) => {
//       if (err) throw err;
//       console.log(result.rows);
//       if (result.rows[0]) {
//         res.json("alreay exists");
//       } else {
//         pool.query(
//           "INSERT INTO users VALUES ($1,$2);",
//           [req.body.email, req.body.password],
//           (err, result) => {
//             if (err) {
//               throw err;
//             }
//             res.json("entry added to DB.");
//           }
//         );
//       }
//     }
//   );
// });

// app.delete("/", (req, res) => {
//   pool.query(
//     "DELETE FROM users WHERE email=($1);",
//     [req.body.email],
//     (err, result) => {
//       if (err) throw err;
//       console.log(result.rows);
//       res.json(`${req.body.email} deleted successfully.`);
//     }
//   );
// });

// app.put("/", (req, res) => {
//   pool.query(
//     "UPDATE users SET password=$2 WHERE email=($1);",
//     [req.body.email, req.body.password],
//     (err, result) => {
//       if (err) throw err;
//       console.log(result.rows);
//       res.json(`${req.body.email} updated successfully.`);
//     }
//   );
// });


app.get('/',(req,res))

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
