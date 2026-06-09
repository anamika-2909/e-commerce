const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
   Firstname:{
        type:String,
        required:true
    },
      Lastname:{
        type:String,
        required:true
    },
     Email:{
        type:String,
        required:true
    },
      Password:{
        type:String,
        required:true
    },
    role:{
         type:String,
         default:"user",
         
    }

})
module.exports=mongoose.model("User",userSchema)