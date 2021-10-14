const User = require("../models/index");
const register = async (req, res) => {
  const { name, city, email, phone } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { name } });
    console.log(alreadyExists);
    if (alreadyExists) {
      res.json("email already exists");
    } else {
      const newUser = new User({
        name: name,
        city: city,
        email: email,
        phone: phone,
      });

      const savedUser = await newUser.save();
      res.json(savedUser);
    }
  } catch {
    res.json("Something  went wrong!!");
  }
};

module.exports = register;
