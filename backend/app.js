require ('dotenv').config()
require('express-async-errors')
const express = require('express')
const DalleRouter = require('./routes/route')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')


const app = express()

const PORT = process.env.port || 3000

app.use(express.json())


app.use('/api/v1/dalle', DalleRouter)

app.use(errorHandlerMiddleware)
app.use(notFound)



const start = async()=>{
    try {
        await app.listen(PORT,()=>{
            console.log(`server is listening at port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()