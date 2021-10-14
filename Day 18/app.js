const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

const sequelize = require("./database/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT} ...`);
});
