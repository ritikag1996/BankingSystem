const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    currentBal:{type:Number},
    accountNo:{type:Number},
})
module.exports=mongoose.model("users",userSchema)