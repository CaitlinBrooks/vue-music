let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Playlist'

let schema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Playlist"
  },
  songs: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)