var express = require("express");
var router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    description: Just a test
 *    responses:
 *      '200':
 *        description: success
 */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
