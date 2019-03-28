const express = require("express");
const router = express.Router();

const vision = require('@google-cloud/vision');
const imageDataURI = require('image-data-uri');


// Creates a client
const client = new vision.ImageAnnotatorClient('./resources/googlekey.json');

router.route("/").post((req, res) => {
  const imageURI = req.body.image;
  const image = imageDataURI.decode(imageURI);

  console.log(image);
  // Performs label detection on the image file
  client.labelDetection({
      image: {
        content: image.dataBuffer
      }
    })
    .then((response) => {
      response = response[0];
      const labelList = response.labelAnnotations;
      res.json({
        labels: labelList
      });

      console.log(response);
    }).catch((error) => {
      console.log(error);
  });
});

module.exports = router;
