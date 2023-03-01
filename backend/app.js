require ('dotenv').config()
require('express-async-errors')
const express = require('express')
const router = require('./routes/route')


const app = express()

const PORT = process.env.port || 3000

app.use(express.json())


app.use('/api/v1/dalle', router)



const start = async()=>{
    try {
        await app.listen(PORT,()=>{
            console.log(`server is listening at port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()