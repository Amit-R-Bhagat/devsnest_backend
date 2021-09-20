const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  category: {
    type: String,
  },
});

let Article = (module.exports = mongoose.model("blog", blogSchema));
