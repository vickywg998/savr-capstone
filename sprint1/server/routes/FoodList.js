const express = require("express");
const router = express.Router();
const uuid = require('uuid')
// const dateFormat = require('dateformat')
var FoodList = require('../db/FoodList.json')
const FOODLIST__DATA__FILE = './db/FoodList.json'
const fs = require('fs')


const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(express.static("website"));

require('dotenv').config();

router.get('/', (req, res) => {
  res.send(FoodList)
 
})


// posting food list items to FoodList.json

router.post('/', (req, res) => {

  const newFoodItem = {
    id: uuid.v4(),
    // timestamp: dateFormat(now, "yyyymmddHHMMss"),
    foodItem: req.body.foodItem,
    category: req.body.category,
    expiryDate: req.body.expiryDate,
  
  }

  
  let sortedTimeList = FoodList.concat(newFoodItem)
  sortedTimeList.sort((a, b) => {
    return a.expiryDate - b.expiryDate
  })

  fs.writeFile(FOODLIST__DATA__FILE, JSON.stringify(sortedTimeList), err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Food Item has been added');

  }) 

  // if (
  //   !newFoodItem.foodItem ||
  //   !newFoodItem.category ||
  //   !newFoodItem.expiryDate 

  // ) {
  //   return res.status(400).send('Please fill in the blank')
  // }
  FoodList = sortedTimeList;
  res.json(FoodList)
})

//getting single food item 

router.get('/:id', (req, res) => {
  let singleFoodItem = FoodList.findIndex(item => {
    return item.id === req.params.id
  })
  if (singleFoodItem !== -1) {
    res.send(FoodList[singleFoodItem])
  } else {
    res.send('No item found')
  }
})

//removing single food item 

router.delete('/:id', (req, res) => {
 
  const singleFoodItem = FoodList.findIndex(item => {
    return item.id === req.params.id
  })
  if (singleFoodItem !== -1) {
    FoodList.splice(singleFoodItem, 1)
    fs.writeFileSync(
      FOODLIST__DATA__FILE,
      JSON.stringify(FoodList),
      err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Food Item has been DELETED')
      }
    )
    res.send(FoodList)
  } else {
    res.send('No item found')
  }
})


module.exports = router
