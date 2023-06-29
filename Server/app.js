require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./router/index")

//Express app
const app = express();


//Connecting to Database
const uri = `mongodb+srv://priyanksoftcolon:${process.env.PASSWORD}@cluster0.17c4qiy.mongodb.net/`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "FoodApplication" })
    .then(() => {
        console.log("Connected to MongoDb Atlas")
    })
    .catch((error) => {
        console.error("Error connecting to MongoDb Atlas " + error)
    })




//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())
app.use('/api', router)
//Server port number
const port = process.env.PORT || 5000;

//Server listening on open port 
app.listen(port, () => console.log(`Server listening on ${port}`))