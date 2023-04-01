const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({}).sort("-createdAt");
  res.status(StatusCodes.OK).json(allPosts);
};

const getSinglePost = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findOne({ _id: postId });
  if (!post) {
    throw new NotFoundError(`No post found with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ post });
};



const getMyAllPosts = async (req, res) => {
  const posts = await Post.find({ createdBy: req.user.userId }).sort(
    "-createdAt"
  );
  res.status(StatusCodes.OK).json(posts);
};



const getMySinglePost = async (req, res) => {
  const {
    user: { userId },
    params: { id: postId },
  } = req;

  const post = await Post.findOne({
    _id: postId,
    createdBy: userId,
  });
  if (!post) {
    throw new NotFoundError(`No post found with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ post });
};



const deleteMyPost = async (req, res) => {
  const {
    user: { userId },
    params: { id: postId },
  } = req;

  const post = await Post.findOneAndRemove({
    _id: postId,
    createdBy: userId,
  });
  if (!post) {
    throw new NotFoundError(`No post found with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ msg: "SUCCESS!" });
};

module.exports = {
  getAllPosts,
  getMyAllPosts,
  getSinglePost,
  getMySinglePost,
  deleteMyPost,
};
