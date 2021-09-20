const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const Article = require("./model");

mongoose.connect("mongodb://localhost/my_database");
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to mongo database");
});

db.on("error", () => {
  console.log("Unable to connect to mongo database.");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    res.json("Token Absent");
  } else {
    let bearer = bearerHeader.split(" ");
    req.token = bearer[1];
    next();
  }
};

app.get("/", (req, res) => {
  res.json("Welcome !!");
});

app.get("/data", verifyToken, (req, res) => {
  const token = req.token;
  jwt.verify(token, "secretkey", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/login", (req, res) => {
  const userInfo = req.body;
  jwt.sign(userInfo, "secretkey", { expiresIn: "60s" }, (err, token) => {
    if (err) {
      console.log(err);
    }
    console.log(token);
    res.json(token);
  });
});

app.get("/mongo", (req, res) => {
  Article.find({}, (err, blogs) => {
    res.json(blogs);
  });
});

app.listen(3000, () => {
  console.log("Server Started on port 3000.");
});
