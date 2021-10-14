const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "amit", {
  host: "localhost",
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    await sequelize.query("CREATE EXTENSION IF NOT EXISTS pg_trgm;");
    console.log("Connected to DB.");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
