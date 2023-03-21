const { StatusCodes } = require("http-status-codes");
const { Configuration, OpenAIApi } = require("openai");
const { BadRequestError } = require("../errors");
const Post = require("../models/Post");
const cloudinary = require("cloudinary").v2;

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//open ai configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//generate image openAi and using cloudinary
const generateImageRequest = async (req, res) => {
  const { name, prompt } = req.body;

  if (!name || !prompt) {
    throw new BadRequestError("please provide name and the prompt");
  }

  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "256x256",
  });

  const urlImage = response.data.data[0].url;


  res.status(StatusCodes.OK).json({
    name: name,
    imageUrl: urlImage,
    prompt,
  });
};

const postRequest = async (req, res) => {
  const { name, imageUrl,prompt } = req.body;

  if(!name || !imageUrl || !prompt ){
    throw new BadRequestError("Please provide the imageURl, prompt and name ")
  }

   const cloudinaryResponse = await cloudinary.uploader.upload(imageUrl, {
    public_id: name,
  });
  const cloudinaryImageUrl = cloudinaryResponse.secure_url;

    const post = await Post.create({
      imageURl: cloudinaryImageUrl,
      name,
      prompt,
    }) 

    console.log(error)
 
  


  res.status(StatusCodes.CREATED). json({msg: "Success!"})





};

module.exports = { postRequest, generateImageRequest };
