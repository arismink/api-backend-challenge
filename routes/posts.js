const axios = require("axios");

const router = require("express").Router();

const { tagCheck, sortCheck, directionCheck } = require("../helpers/data-validator");

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

  router.get("/posts/:tag?/:sortTag?/:sortDirection?", (req, res) => {
    const tag = "" || req.params.tag;
    const sortTag = "" || req.params.sortTag;
    const sortDirection = "" || req.params.sortDirection;

    const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`


    try {

      if (!tagCheck(tag)) throw Error ("Tags parameter is required");

      if (sortTag && !sortCheck(sortTag)) throw Error("sortBy parameter is invalid. Please enter a valid sort tag from: id, reads, likes, popularity or leave blank.");

      if (sortDirection && !directionCheck(sortDirection)) throw Error("Sort direction is invalid. Please enter a valid direction from: desc, asc or leave blank.");

      res.send("worked?")

    } catch(e) {
      res.send({error: e.message}).status(400)
    }


    // axios.get(url)
    // .then(result => {
    //   console.log(result)
    //   res.send(result)
    // })
    // .catch(err => {
    //   res.send({error: "Tag parameter required"}).status(400)
    // })
  })
  return router;
};