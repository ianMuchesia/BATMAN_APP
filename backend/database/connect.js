const mongoose = require('mongoose')

const connectDB = async(url)=>{
    mongoose.set('strictQuery', true)

    try {
        await mongoose.connect(url)
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB