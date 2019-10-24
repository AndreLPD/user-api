const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
require("../models/user");
const User = mongoose.model("User");


module.exports = {
    async show(req, res){
        //const {username, password} = req.body;
        
    },
    async store(req, res){
        const {username, password} = req.body;
        const saltRounds = 10;

        let user = await User.findOne({username});
        if(!user){
                bcrypt.hash(password,saltRounds, function(err, hash){
                    if(err) return res.json({err})
                   user = User.create({username, hash});
                   return res.json(user);
               });
             
        }else{
            return res.status("400").json({"message":"user already exists"})
        }
    }
};
