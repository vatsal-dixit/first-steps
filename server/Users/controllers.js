const { User } = require("./model");
const jwt = require("jsonwebtoken");


const register = async(req,res)=>{
    const {email,password} = req.body;
    const isEmail = User.findOne({email:email});
    if(isEmail){
        return res.json({status:"Error",message:"Email already exists"});
    }
    if(password.length < 8){
        return res.json({status:"Error",message:"Password must have at least 8 characters"});
    }
}