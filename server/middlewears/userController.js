const joi = require("joi");
const hasing = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { email, password } = req.body;
};
