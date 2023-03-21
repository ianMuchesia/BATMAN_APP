const Post = require("../models/Post")
const {StatusCodes} = require('http-status-codes')

const getRequest = async(req, res)=>{
   const allPosts = await Post.find({}).sort('-createdAt')
   res.status(StatusCodes.OK).json(allPosts)
}

module.exports = getRequest