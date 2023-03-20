const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please provide your name'],
        minlength: 3,
        maxlenght: 50,

    },
    email:{
        type: String,
        required: [true ,'please provide your email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please provie valid email",
          ],
        unique: true,
    },
    password:{
        type: String,
        required: [ true, "please provide password"],
        minlength: 6
    }
})



const User = mongoose.model("User", UserSchema)

module.exports = User