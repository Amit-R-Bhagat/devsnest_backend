const { Op } = require("sequelize");
const sequelize = require("../database");
const User = require("../models/index");
const exact_search = async (req, res) => {
  try {
    let q = req.query.name;
    let user = await User.findOne({ where: { name: q } });
    if (user) {
      res.json(user);
    } else {
      res.json("User does not exist");
    }
  } catch (err) {
    console.log(err);
    res.json("Something went wrong");
  }
};

const partial_search = async (req, res) => {
  try {
    let q = req.query.q;
    let matches = await User.findAll({
      where: {
        name: {
          [Op.like]: "%" + q + "%",
        },
      },
    });

    if (matches.length > 0) {
      res.json(matches);
    } else {
      res.json("No match found.");
    }
  } catch (err) {
    console.log(err);
    res.json("Something went wrong");
  }
};

const google_search = (req, res) => {
  let q = req.query.q;
  sequelize
    .query("select * from pg_extension where extname='pg_trgm';")
    .then(() => {
      User.findAll({
        attributes: {
          include: [
            [sequelize.fn("similarity", sequelize.col("name", q)), "score"],
          ],
        },
        where: [
          sequelize.where(
            sequelize.fn("similarity", sequelize.col("name"), q),
            { [Op.gt]: 0.2 }
          ),
          {},
        ],
      })
        .then((users) => res.status(200).send(users))
        .catch((error) => {
          console.log(error);
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
};

const similar_sounding = async (req, res) => {
  try {
    const extension = await sequelize.query(
      "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch"
    );

    const user = await sequelize.query(
      `SELECT * FROM "Users" WHERE SOUNDEX("name") = SOUNDEX('${req.query.q}');`
    );
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const metaphone = async (req, res) => {
  try {
    const extension = await sequelize.query(
      "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch"
    );

    const user =
      await sequelize.query(`SELECT * FROM "Users" ORDER BY SIMILARITY(
      METAPHONE("name",10),
        METAPHONE('${req.query.q}',10)
      ) DESC
      LIMIT 5;`);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const levenshtein = async (req, res) => {
  try {
    const extension = await sequelize.query(
      "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch"
    );

    const user = await sequelize.query(
      `SELECT *, LEVENSHTEIN("name",'${
        (req, query.q)
      }') FROM "Users" ORDER BY LEVENSHTEIN("name",'${
        req.query.q
      }') ASC LIMIT 5`
    );
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  exact_search,
  partial_search,
  google_search,
  similar_sounding,
  metaphone,
  levenshtein,
};
