let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds018568.mlab.com:18568/vuemusic'
let connection = mongoose.connection


mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("Database Error: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})