import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import UniqueValidator from 'mongoose-unique-validator'
import jwt from 'jsonwebtoken'

const saltRounds = 10

const userSchema = new mongoose.Schema(
    {
        email : { type : String, required : true, lowercase : true, index : true, unique : true},
        passwordHash : { type : String, required : true},
        username : { type : String, required : true, unique : true}
    },
    { timestamps : true }
)

userSchema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash)
}

userSchema.methods.setPassword = function setPassword(password){
    var salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt)
}

userSchema.methods.toAuthJson = function toAuthJson(){
    return{
        email : this.email,
        password : this.password,
        token : this.generateJWT()
    }
}

userSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email : this.email
    }, process.env.JWT_SECRET)
}

module.exports = mongoose.model('User', userSchema )