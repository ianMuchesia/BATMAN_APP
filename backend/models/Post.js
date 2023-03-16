const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema({
    name:{
        type:String,
        required: [true, 'post name required']
    },
    prompt:{
        type: String,
        required: [true , 'prompt is required ']
    },
    imageUrl:{
        type: String,
        required: [true, 'image URL is a must']
    }
})


const Post = mongoose.model("Book", postSchema);
module.exports = Post