const mongoose = require('mongoose')
const Schema = mongoose.Schema
const GroupRequestSchema = new Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'character'
    },
    role : [{
        type: String,
        default: ['DPS']
    }],
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group'
    },
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('GroupRequest', GroupRequestSchema)
