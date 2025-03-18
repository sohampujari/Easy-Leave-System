const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EasyLeave').then(()=>{
    console.log("MongoDB connected...");
}).catch((error)=>{
    console.log(error);
})


//Users
const LogInSchema = mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
})



const collection = new mongoose.model("users" , LogInSchema);

module.exports = collection;
