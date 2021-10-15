let logger = null;

if (process.env.NODE_ENV === "development") {
  logger = require("./dev_logger");
} else {
  logger = require("./prod_logger");
}

module.exports = logger;
