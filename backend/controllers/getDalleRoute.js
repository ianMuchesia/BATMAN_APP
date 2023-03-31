const Post = require("../models/Post")
const {StatusCodes} = require('http-status-codes')

const getAllPosts = async(req, res)=>{
   const allPosts = await Post.find({}).sort('-createdAt')
   res.status(StatusCodes.OK).json(allPosts)
}

const getSinglePost = async(req, res)=>{

}

const getMyAllPosts = async(req, res)=>{
   const posts = await Post.find({createdBy:req.user.userId}).sort('-createdAt')
   res.status(StatusCodes.OK).json({posts ,count:posts.length})

}

module.exports = {getAllPosts, getMyAllPosts, getSinglePost}