const mongoose = require ('mongoose')

uri="mongodb://localhost:27017/RestAPI"
const connectDB=()=>{
    console.log("Connect db");
    return mongoose.connect(uri,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
}

module.exports=connectDB;