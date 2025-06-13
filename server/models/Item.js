const mongoose=require('mongoose')

const itemSchema=new mongoose.model({
    name:String,
    unit:String,
    quantityInStock:Number,
    centerId:String,
});

module.exports=mongoose.model('Item',itemSchema);