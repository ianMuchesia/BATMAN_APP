const { StatusCodes } = require("http-status-codes");
const {CustomAPIError} = require("../errors");


const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }
  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'Something went wrong try again later'
  }
  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.errors).map((item)=>item.message).join(',');
    customError.statusCode = 400
  }
  if(err.code && err.code === 11000){
    customError.msg = `Value enterd for ${Object.keys(err.keyValue)} field already exists, please choose another value`
    customError.statusCode = 400
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
