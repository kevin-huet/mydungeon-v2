const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Character = new Schema({
    blizzard_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blizzard_user'
    },
    realm: {
        type: String
    },
    name: {
        type: String
    },
    id_character: {
        type: Number
    },
    notation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'player_notation'
    }
})
module.exports = mongoose.model('Character', Character)
