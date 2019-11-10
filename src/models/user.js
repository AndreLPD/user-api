const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = mongoose.Schema;

const User = UserSchema({
    username:{
        type:String,
        unique:true, 
        required:true
    },
    password:{
        type:String,
        unique:true, 
        required:true,
        select: false
    },
    active:{
        type:Boolean, 
        default:true
    },
    createdAt:{
        type:String, 
        default:Date.now
    }
});


//Antes de salvar converter para hash
User.pre("save",  async (next) => {
    const genSalt = 10;
    const hash = await bcryptjs.hash(this.password, genSalt);
    this.password = hash;
    next();
})

mongoose.model("User", User);