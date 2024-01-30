const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vaibhavmahajan2257:233257Vai@cluster0.10mvk7d.mongodb.net/userappnew");   

const User =   mongoose.model('Users', {name:String, email:String,password:String});
const user = new User({
    name:"Vaibhav Mahajan",
    email:"dsfnasf@gmail.com",
    password:"12356789"
});
user.save();