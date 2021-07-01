const mongoose = require('mongoose')

const connexionString = process.env.DB_URL

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
