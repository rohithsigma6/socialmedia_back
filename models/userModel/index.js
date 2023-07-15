const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        min:1,
        max:25
    },
    lastName :{
        type:String,
        required:true,
        min:1,
        max:25
    },
    email :{
        type:String,
        required:true,
        min:1,
        max:35,
        unique:true
    },
    password :{
        type:String,
        required:true,
        min:6,
        max:15
    },
    picturePath :{
        type:String,
        default:""
    },
    friends:{
        type:Array,
        default:[]
    } 
},{
    timestamps:true
})

module.exports.User = new mongoose.model("User",userSchema)