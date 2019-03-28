const express = require("express");
const router = express.Router();
const axios = require("axios");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(express.static("website"));
router.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config()

var api_key = process.env.API_KEY;
var api_id = process.env.API_ID;

const searchURL = q =>
  `https://api.edamam.com/search?q=${q}&app_id=${api_id}&app_key=
  ${api_key}`;
console.log(process.env)
router.route("/search").get((req, res) => {
  const { q } = req.query;
  axios.get(searchURL(q)).then(response => {
    res.json({
      recipe: response.data.hits
    
    });
  }).catch((error) => {
    this.showErrors(error.response.data.error)
  });
});

router.get("/search/:id", (req, res) => {
  const { q } = req.query;
  console.log(req.params.id);
  axios.get(searchURL(q)).then(response => {
res.json(response.data.hits[req.params.id]
)
  })
});



module.exports = router;
