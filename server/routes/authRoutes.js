/* Routes for authentication system */

const express = require("express");
const {Router} = require("express");
const {
  login_get,
  login_post,
  logout_get,
} = require("../controllers/authController");

const router = Router();

router.get("/login", login_get);
router.post("/login", login_post);

router.get("/logout", logout_get);

module.exports = router;
