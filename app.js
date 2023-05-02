const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const dashboardRoutes = require("./server/routes/dashboardRoutes");
const authRoutes = require("./server/routes/authRoutes");
const {
  requireAuth,
  checkUser,
  checkAuth,
} = require("./server/middleware/authMiddleware");
require("dotenv").config();

const app = express();

// middleware
app.use(express.static("client/src"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("views", path.join(__dirname, "client"));
app.set("view engine", "ejs");

// database connection
require("./server/config/database");

// routes
app.get("*", checkUser);

app.use("/login", checkAuth);

app.use("/", authRoutes, requireAuth, dashboardRoutes);

app.listen(3000);
