const {StatusCodes } = require('http-status-codes');
const { Configuration, OpenAIApi } = require("openai");
const { BadRequestError } = require("../errors");
const cloudinary = require('cloudinary').v2;




//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

//open ai configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const generateImageRequest = async(req, res)=>{
    const { name , prompt} = req.body

    if(!name || !prompt) {
      throw new BadRequestError("please provide name and the prompt")
    }
  
    const response = await openai.createImage({
        prompt,
        n:1,
        size:"256x256",
        
    }) 

    
   const urlImage = response.data.data[0].url
  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(urlImage,{public_id: name})
   
   console.log(cloudinaryResponse)
  } catch (error) {
    console.log(error)
  }
   
   
   console.log(cloudinaryResponse)
    
}
const postRequest = async(req, res)=>{
  const { name , imageUrl } = req.body
  res.send("here iam ")
}



module.exports = {postRequest, generateImageRequest}