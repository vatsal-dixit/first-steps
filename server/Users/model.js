const mongoose = require("mongoose");
const uuid = require("uuid");
const CryptoJS = require("crypto-js")

const userSchema = new mongoose.Schema({
    full_name : String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    enc_pass : {
        type: String,
        required: true
    },
    salt : String
},{timestamps:true});

userSchema.methods = {
    encrpytPass : function(plainPassword){
        return CryptoJS.SHA256(plainPassword,this.salt).toString();
    },
    authenticate : function(pass){
        return this.enc_pass === this.encrpytPass(pass);
    }
}

userSchema.virtual("password").set(function(plainPassword){
    this.salt = uuid.v4();
    this.enc_pass = this.encrpytPass(plainPassword);
})

const User = mongoose.model("User",userSchema);

module.exports = { User };