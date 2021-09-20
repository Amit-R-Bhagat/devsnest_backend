const express = require("express");
const Pool = require("pg").Pool;
const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "amit",
  port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body.email);
  pool.query(
    `SELECT * FROM users where email like '%${req.body.email}%';`,
    (err, result) => {
      if (err) throw err;
      res.json(result.rows);
    }
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// SQL injection --> %' UNION (SELECT * FROM users);--
