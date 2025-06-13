const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // unique username
  password: { type: String, required: true },
  role:{type:String,enum:['admin','volunteer','family'],required:true},
  centerId:String,
},{timestamps:true});

module.exports=mongoose.model('User',userSchema);