const express = require("express");
const getUsers = require("../controller/getUsers.js");
const router = express.Router();
const register = require("../controller/index.js");
const {
  exact_search,
  partial_search,
  google_search,
  similar_sounding,
  metaphone,
  levenshtein,
} = require("../controller/search.js");

router.post("/", register);

router.get("/users", getUsers);

router.get("/user", google_search);

router.get("/sound", similar_sounding);

router.get("/metaphone", metaphone);

router.get("/levenshtein", levenshtein);

module.exports = router;
