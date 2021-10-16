const logger = require("./logger/index");

logger.info("info", { meta: "req.user" });
logger.warn("warn");
logger.error(new Error("something went wrong"));
logger.debug("debug");
logger.silly("silly");
