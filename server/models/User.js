const {Schema, model} = require("mongoose");

const User = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    signUp: {type: String, required: true},
    signIn: {type: String, default: ''},
    status: {type: String, default: 'unblock'},
})

model.export = model('User', User);