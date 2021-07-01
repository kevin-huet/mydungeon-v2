const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dungeon_group: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    character: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    token: String,
    token_expiration: Date,
    last_api_refresh: Date,
})
module.exports = mongoose.model('User', UserSchema)
