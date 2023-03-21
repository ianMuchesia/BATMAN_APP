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
},
{timestamps: true}
)


const Post = mongoose.model("Post", postSchema);
module.exports = Post