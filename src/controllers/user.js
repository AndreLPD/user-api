const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const authConfig = require("../config/auth");
require("../models/user");
const User = mongoose.model("User");


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: "86400"
    });
}

module.exports = {
    async show(req, res){
        const {username, password} = req.body;

        const user = await User.findOne({username}).select("+password");

    if(!await bcryptjs.compare(password, user.password)){
       return res.status("400").json({"error":"Wrong password"});
    }

    
    user.password = undefined;
    res.json({
        user, 
        token: generateToken({id: user.id})
    });
    },


    async store(req, res){
        const {username, password} = req.body;

        let user = await User.findOne({username});
        if(!user){
            let user = User.create({username, password});
            user.password = undefined;
            return res.json({
                user, 
                token: generateToken({id: user.id})
            });
        }else{
            return res.status("400").json({"message":"user already exists"})
        }
    }
};
