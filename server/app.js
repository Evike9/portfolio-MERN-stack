require("dotenv").config();
require("./config/dbConnection");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const projectsRouter = require("./routes/projectsRoutes");

const app = express();
const cors = require("cors");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/projects", projectsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  // render the error page
  res.status(err.status || 500); // updated
  console.log(err);
  res.json(err);
});

module.exports = app;
