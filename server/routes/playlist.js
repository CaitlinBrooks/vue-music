let router = require('express').Router()
let playlist = require('../models/playlist.js')
let mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId


router.get('/', (req, res, next) => {
  playlist.find({})
    .then(plist => {
      res.send(plist)
    }).catch(next)
})

router.post('/', (req, res, next) => {
  playlist.create(req.body)
    .then(playlist => {
      res.send(playlist)
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
  playlist.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    })).catch(next)
})


router.delete('/:id', (req, res, next) => {
  playlist.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Deleted'
    })).catch(next)
})

module.exports = router