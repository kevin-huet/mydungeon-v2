const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CovenantSchema = new Schema({
    name: [{
    }],
    id: Number,
})
module.exports = mongoose.model('Covenant', new Schema({}, { strict: false }))
