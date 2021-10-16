const { createLogger, format, transports } = require("winston");
const { printf, combine, timestamp, colorize, errors } = format;

// Our own format
const logFormat = printf(({ stack, level, message, timestamp }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: "info",
  //if using colorize it should be the first argument in combine
  format: combine(
    colorize(),
    timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    //This emables stack Trace
    errors({ stack: true }),
    logFormat
  ),
  transports: [new transports.Console()],
});

module.exports = logger;

// By default when we use winston we don't get the stacktrace of error object in logger.error()
