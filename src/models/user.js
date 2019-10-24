const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    active:{type:Boolean, default:true},
    createdAt:{type:String, default:Date.now()}
});

mongoose.model("User", User);