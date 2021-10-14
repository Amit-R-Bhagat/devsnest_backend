const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define(
  "Users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        name: "User_trigrm",
        concurrently: true,
        using: "GIN",
        fields: [sequelize.literal('"name" gin_trgm_ops')],
      },
    ],
  }
);

module.exports = User;
