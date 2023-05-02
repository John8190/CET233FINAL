/* Routes for home page */

const express = require("express");
const {Router} = require("express");
const {
  home_get,
  comparisons_get,
} = require("../controllers/dashboardController");

const router = Router();

router.get("/", home_get);

router.get(`/comparisons`, comparisons_get);

module.exports = router;
