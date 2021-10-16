const { createLogger, format, transports } = require("winston");
const { combine, timestamp, errors, json } = format;
const DiscordTransport = require("winston-discord-transport").default;
const SlackHook = require("winston-slack-webhook-transport");

function buildProdLogger() {
  return createLogger({
    level: "debug",
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: "user-service" },
    transports: [
      // new transports.File({ filename: "logs/error.log", level: "error" }),
      // new transports.File({ filename: "logs/combined.log" }),
      new DiscordTransport({
        webhook:
          "https://discord.com/api/webhooks/898564254360272937/B7wI2zo0kEBC5-sKjuXNtvynnjLLvsjfPG-aMcybAhUsQhKuCDdHMmIeoyyw88P2cio1",
        defaultMeta: { service: "my-discord-service" },
        level: "silly",
      }),
      new SlackHook({
        webhookUrl:
          "https://hooks.slack.com/services/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",
      }),
    ],
  });
}

module.exports = buildProdLogger();
