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

  router.get("/posts/:tag/:sortTag?/:sortDirection?", (req, res) => {
    const tag = "" || req.params.tag;
    const sortTag = "" || req.params.sortTag;
    const sortDirection = "" || req.params.sortDirection;

    const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`


    axios.get(url)
    .then(result => {
      res.send(result.data)
    })
  })
  return router;
};