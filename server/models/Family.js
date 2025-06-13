const mongoose=require('mongoose');
const familySchema=new mongoose.Schema({
    familyId:String,
    patientId:String,
    centerId:String,
    visitHistory:[
        {
            date:Date,
            type:String,
            item:Array,
        }
    ]
});

module.exports=mongoose.model('Family',familySchema);