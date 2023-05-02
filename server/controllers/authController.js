const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// handle errors
const handleErros = (err) => {
  let errors = {username: "", password: ""};

  // Incorrect username
  if (err.message === "Incorrect username") {
    errors.username = "Username is not registered";
  }

  if (err.message === "Incorrect password") {
    errors.password = "Password is incorrect";
  }

  // duplicate errors codes
  if (err.code === 11000) {
    errors.username = "That username is already registered";
  }

  // Validate errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({id}, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000});

    res.status(200).json({user: user._id});
  } catch (error) {
    const errors = handleErros(error);
    res.status(400).json({errors});
  }
};

module.exports.logout_get = async (req, res) => {
  res.cookie("jwt", "", {maxAge: 0.1});
  res.redirect("/login");
};
