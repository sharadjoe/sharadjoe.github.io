import express from 'express'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

//TODO: add a route for checking the username and email together

const router = express.Router()

router.post('/', (req, res)=> {
    const { credentials } = req.body
    User.findOne({ username : credentials.username}).then((user) => {
        if(user && user.isValidPassword( credentials.password)){
            res.json({ user : user.toAuthJson })
        }else{
            res.status(400).json({ errors : "Invalid credentials" })
        }
    })
})


export default router