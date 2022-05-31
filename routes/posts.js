const axios = require("axios");

const router = require("express").Router();

const { tagCheck, sortCheck, directionCheck } = require("../helpers/data-validator");

const { dataSort } = require("../helpers/data-helpers");

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

    try {
      let tag = "";
      const sortTag = "" || req.params.sortTag;
      const sortDirection = "" || req.params.sortDirection;

      // Check if tag is valid
      if (!req.params.tag) {
        throw Error ("Tags parameter is required")
      } else {
        tag = req.params.tag.split(',');
        console.log('tag', tag)
      };


      // if entered, check if sort tag is valid
      if (sortTag && !sortCheck(sortTag)) throw Error("sortBy parameter is invalid. Please enter a valid sort tag from: id, reads, likes, popularity or leave blank.");

      // if entered, check if direction is valid
      if (sortDirection && !directionCheck(sortDirection)) throw Error("Sort direction is invalid. Please enter a valid direction from: desc, asc or leave blank.");

      const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`


      console.log(tag.length)
      console.log(url)

      axios.get(url)
      .then(result => {

        const sortedData = dataSort(result.data.posts, sortTag || false, sortDirection || false);
        res.send({ posts: sortedData});
      })

    } catch(e) {
      res.send({error: e.message}).status(400)
    }


  })
  return router;
};