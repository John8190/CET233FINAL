const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.home_get = (req, res) => {
  res.render("home", {url: req.url});
};

module.exports.comparisons_get = (req, res) => {
  res.render("comparison", {url: req.url});
};

module.exports.vehicle_get = (req, res) => {
  res.render("vehicle", {url: req.url, vehicle: req.params});
};
