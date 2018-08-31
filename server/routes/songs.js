let router = require('express').Router()
let Playlists = require('../models/playlists')
let Songs = require('../models/songs')


router.post('/login', (req, res, next) => {
  Playlists.findOne({
    username: req.body.username,
    pin: req.body.pin
  }).then(user => {
    if (user) {
      return res.send(user)
    }
    return res.status(401).send({
      error: "Invalid Login"
    })
  })
})

router.post('/register', (req, res, next) => {
  Playlists.create(req.body).then(user => {
    res.send(user)
  }).catch(next)
})

module.exports = router