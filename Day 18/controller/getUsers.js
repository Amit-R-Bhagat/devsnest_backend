const User = require("../models/index");

const getUsers = async (req, res) => {
  try {
    let users = await User.findAll({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong!");
  }
};

module.exports = getUsers;
