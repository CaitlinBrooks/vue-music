let router = require('express').Router()
let Songs = require('../models/song')


router.get('/', (req, res, next) => {
  Songs.find({})
    .then(slist => {
      res.send(slist)
    }).catch(next)
})

router.post('/', (req, res, next) => {
  Songs.create(req.body)
    .then(song => {
      res.send(song)
    }).catch(next)
})

// router.put('/:id', (req, res, next) => {
//   Songs.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.send({
//       message: 'Success'
//     })).catch(next)
// })

// router.post('/:id/upvote', (req, res, next) => {
//   Songs.findById(req.params.id)
//     .then((post) => {
//       post.vote++
//       return post.save()
//     })
//     .then(() => res.send({
//       message: "You liked this song."
//     }))
//     .catch(next)
// })

// router.post('/:id/downvote', (req, res, next) => {
//   Songs.findById(req.params.id)
//     .then((post) => {
//       post.vote--
//       return post.save()
//     })
//     .then(() => res.send({
//       message: "You did not like this song."
//     }))
//     .catch(next)
// })

router.delete('/:id', (req, res, next) => {
  Songs.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Deleted'
    })).catch(next)
})

module.exports = router