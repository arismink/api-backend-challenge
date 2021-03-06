const express = require("express");
const app = express();

// middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));

// routes
const postRouter = require("./src/routes/posts");

app.use("/api", postRouter());


module.exports = app;