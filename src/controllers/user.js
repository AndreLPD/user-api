const bcryptjs = require('bcryptjs');
const mongoose = require("mongoose");
require("../models/user");
const User = mongoose.model("User");


module.exports = {
    async show(req, res){
        const {username, password} = req.body;

        const user = await User.findOne({username}).select("+password");

    if(!await bcryptjs.compare(password, user.password)){
        res.status("400").json({"error":"Wrong password"});
    }else{
        res.json({"login":"ok"});
    }
    },
    async store(req, res){
        const {username, password} = req.body;

        let user = await User.findOne({username});
        if(!user){
            let user = User.create({username, password});
            user.password = undefined;
            return res.json(user);
        }else{
            return res.status("400").json({"message":"user already exists"})
        }
    }
};
