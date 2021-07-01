const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: ''
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ''
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ''
    }]
})
module.exports = mongoose.model('User', UserSchema)
