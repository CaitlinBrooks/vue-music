let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'

let schema = new Schema({
  title: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    ref: 'User',
    required: true
  },
  audio: {
    type: String,
    required: true
  }
  //how does timestamp integrate on front end
})

module.exports = mongoose.model(schemaName, schema)