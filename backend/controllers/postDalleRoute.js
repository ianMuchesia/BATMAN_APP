//const {StatusCodes } = require('http-status-codes');
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const postRequest = async(req, res)=>{
    
     const response = await openai.createImage({
        prompt:req.body.prompt,
        size:"256x256",
    }) 
    
    res.json(response.data)
    
}


module.exports = postRequest