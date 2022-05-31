const axios = require("axios");

const router = require("express").Router();

module.exports = () => {
  router.get("/ping", (req, res) => {

    axios.get("https://api.hatchways.io/assessment/blog/posts?tag=ping")
    .then((result) => {
      // successful connection with API
      res.send({success: true})
    })
    .catch(err => {
      res.send(err.message)
    })
  })

  // router.get("/posts", (req, res) => {

  //   axios.get("https://api.hatchways.io/assessment/blog/posts?tag=:tag")
  // })
  return router;
};