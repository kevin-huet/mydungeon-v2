const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    first_name: {
        type: String,
        required: '{PATH} is required!'
    },
    username: {
        type: String,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        required: '{PATH} is required!'
    },
    password: {
        type: String,
        required: '{PATH} is required!'
    },
    blizzardUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlizzardUser'
    },
    roles: {
        type: [{
            type: String,
        }],
        default: ["ROLE_USER"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
    },
    activated: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User', UserSchema)
