const redis = require("redis");

const redisClient = redis.createClient();

redisClient.on("connect", () => {
  console.log("Connected to redis.");
});

redisClient.on("error", () => {
  console.log("Unable to connect to redis.");
});

redisClient.set("age", "23", redis.print);
redisClient.get("name", redis.print);
redisClient.keys("*", redis.print);
