const jwt = require('jsonwebtoken')
const jwtSecret = 'qwerty'

function authorization(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
  if(!token) {
    res.send('unable to access private data')
    return    
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if(err) {
      console.log(err)
      res.send('unable to access private data')
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = authorization



