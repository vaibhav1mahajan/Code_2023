const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vaibhavmahajan2257:233257Vai@cluster0.10mvk7d.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}