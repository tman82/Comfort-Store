const mongoose = require('mongoose')
const Schema = mongoose.Schema

let User = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }
})


module.exports = mongoose.model('User', User)