const joi = require("joi");
const hasing = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("../middlewears/database");

const Login = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { email, password } = req.body;
};

const Register = async (req, res) => {
  const schema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { username, email, password } = req.body;

  const findSql = "select email from users where email = ?";

  const find = mysql.query(findSql, [email]);
  res.json(find);
};

module.exports = { Register, Login };
