const express = require("express");
const app = express();

// middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));


app.listen(3000, () => {
  console.log("Server running on port 3000")
})