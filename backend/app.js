require ('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const express = require('express')
const DalleRouter = require('./routes/route')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')
const connectDB = require('./database/connect')
const authenticateUser = require('./middlewares/authentication')
const authRoute = require('./routes/auth')
const app = express()

const PORT = process.env.port || 3000

app.use(express.json())
app.use(cors())


app.use('/api/v1/dalle', authRoute)
app.use('/api/v1/dalle', DalleRouter)

app.use(errorHandlerMiddleware)
app.use(notFound)



const start = async()=>{
    try {
       await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`server is listening at port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()