const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/user_portfillo")
.then((data)=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log("something went wrong");
})


let schema = new mongoose.Schema({
    name :String,
    email:String,
    concern:String
})

let model = new mongoose.model("user_form_data",schema)

module.exports = model ;
