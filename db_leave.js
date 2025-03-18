const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EasyLeave').then(()=>{
   console.log("MongoDB connected...")
}).catch((error)=>{
    console.log(error);
})

//Leave Details
const leaveDetail = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    fromdate:{
        type:Date,
        required:true
    },
    todate:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


const leave_collection = new mongoose.model("leaves" , leaveDetail);

module.exports = leave_collection;