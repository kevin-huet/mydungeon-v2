const mongoose = require('mongoose')

const connexionString = 'mongodb://172.23.0.1:27017/dungeon'

const initDB = () => {
  mongoose.connect(connexionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  mongoose.connection.once('open', () => {
    console.log('connected to database')
  })

  mongoose.connection.on('error', console.error)
}
module.exports = initDB
