import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { signUp } from './routes/signUp'

const dbConfig = require('./config/database.config')
const port = 3001
const app = express()



dotenv.config()
mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
    useNewUrlParser : true
}).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log("Something went wrong while connecting to the database")
    process.exit()
})

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/api/signUp/", signUp )

app.get('/', function(req, res){
    res.json({ message : "the api is working for now" })
})

app.listen(port, function(req, res){
    console.log("The server is running at port ", port)
})