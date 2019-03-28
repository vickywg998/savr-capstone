const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt= require('bcrypt')
const authorization = require('./middleware')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const DiscoveryRouter = require('./routes/Discovery')
const FoodListRoute = require('./routes/FoodList')
const ImageRecRoute = require('./routes/ImageRec')
require('dotenv').config()



app.use(bodyParser.json({limit: '20mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}))

app.use(cors()); 
app.use('/', DiscoveryRouter)
app.use('/feature', FoodListRoute)
app.use('/webcam', ImageRecRoute)

const jwtSecret = 'qwerty'
const saltRounds = 10
const users = []

app.post('/signup', (req, res) => {
  const { email, password } = req.body
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        users.push({
          email,
          passwordHash: hash
        })
        console.log(users)
        res.json({
       success: "Thank you so much for signing up with Savr! You may now access your account!"
        })
        
    });
  });

})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => {
    return user.email === email
  })
  if(user) {
    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if(err) {
        res.send({
          error: "The credentials you supplied were not correct. Please check again!"
        })
        return 

      }
      const token = jwt.sign({
        email: user.email,
        iss: 'localhost:8080',
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        role: 'admin'
      }, jwtSecret)
      res.send({
        token
      })
    })
  } else {
    res.send({
      success: "Thank you for logging in! You may now access your account!"
    })
  }
})

app.get('/private1', authorization, (req, res) => {
  console.log(req.decoded)
  res.send('Private Data')
})

app.get('/private2', authorization, (req, res) => {
  console.log(req.decoded)
  res.send('Private Data 2')
})




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})

