const joi = require("joi");
const hasing = require("bcrypt");
const jwt = require("jsonwebtoken");
const lodash = require("lodash");
const mysql = require("../middlewears/database");

const Login = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { email, password } = req.body;

  try {
    const findSql = "select email,password,id from Users where email = ?";
    const find = await mysql.query(findSql, [email]);
    if (!lodash.isEmpty(find[0])) {
      const hasedPass = await hasing.compare(password, find[0][0].password);
      if (hasedPass) {
        const token = jwt.sign({ _Id: find[0][0].id }, process.env.JWT_KEY);
        res.status(200).header({ "x-auth-token": token }).send("Login Done");
      } else {
        res.status(400).send("Invalid password");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  } catch (error) {
    res.status(500).send("Something Wrong Happen");
  }
};

const Register = async (req, res) => {
  const { username, email, password } = req.body;
  const schema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  const { error } = schema.validate({ username, email, password });
  if (error) return res.status(400).send(error.message);

  try {
    const findSql = "select email from Users where email = ?";
    const find = await mysql.query(findSql, [email]);
    if (lodash.isEmpty(find[0])) {
      const hasedPass = await hasing.hash(password, 10);
      const insertSQL =
        "insert into Users (email,username,password) values (?,?,?)";
      const insert = await mysql.query(insertSQL, [email, username, hasedPass]);
      const token = jwt.sign({ _Id: insert[0].insertId }, process.env.JWT_KEY);
      res
        .status(200)
        .header({ "x-auth-token": token })
        .send("Registering Done");
    } else {
      res.status(400).send("Email Already Registerd");
    }
  } catch (error) {
    res.status(500).send("Something Wrong Happen");
  }
};

module.exports = { Register, Login };
