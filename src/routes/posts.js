const axios = require("axios");

const router = require("express").Router();

const { tagCheck, sortCheck, directionCheck } = require("../helpers/data-validator");

const { dataSort, removeDuplicates } = require("../helpers/data-helpers");

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

  router.get("/posts/:tag?/:sortParam?/:sortDirection?", (req, res) => {

    try {
      let tag = "";
      const sortParam = "" || req.params.sortParam;
      const sortDirection = "" || req.params.sortDirection;

      // Check if tag is valid
      if (!tagCheck(req.params.tag)) {
        throw Error ("Tags parameter is required")
      }

      tags = tagCheck(req.params.tag);
      console.log('tag', tags)

      // if entered, check if sort tag is valid
      if (sortParam && !sortCheck(sortParam)) throw Error("sortBy parameter is invalid. Please enter a valid sort tag from: id, reads, likes, popularity or leave blank.");

      // if entered, check if direction is valid
      if (sortDirection && !directionCheck(sortDirection)) throw Error("Sort direction is invalid. Please enter a valid direction from: desc, asc or leave blank.");


      let results = [];


      // create a promise for each API call in order to get an array of API request data
      let requests = tags.map(tag => {
        return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`)
      })

      // make concurrent requests to API
      Promise.all(requests)
        .then((body) => {
          body.forEach(result => {

            if (result){
              for (const obj of result.data.posts) {
                results.push(obj)
              }
            }
          })

          // pass the data to be sorted accordingly based on sort parameter
          const sortedData = dataSort(results, sortParam || false, sortDirection || false);

          // clean up data by removing duplicates
          const cleanedData = removeDuplicates(sortedData)

          // send results
          res.send({posts: cleanedData})

        })
        .catch(err => console.log(err.message))


    } catch(e) {
      res.send({error: e.message}).status(400)
    }


  })
  return router;
};