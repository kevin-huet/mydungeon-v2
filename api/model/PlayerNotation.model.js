const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'character'
    },
    noted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'character'
    },
    noted_at: {
        type: Date,
        default: Date.now
    },
    positive_note: {

    },
    negative_note: {

    }
})
module.exports = mongoose.model('User', UserSchema)
