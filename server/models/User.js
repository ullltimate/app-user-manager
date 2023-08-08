const {Schema, model} = require("mongoose");

const User = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    signUp: {type: Date, default: Date.now},
    signIn: {type: Date, default: Date.now},
    status: {type: String, default: 'unblock'},
})

module.exports = model('User', User);