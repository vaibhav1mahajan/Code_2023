// import { todo } from "./db";
// import { createTodo , updateTodo } from "./types";

const express = require("express");
const cors = require("cors");   

const {todo} = require("./db");
const { createTodo , updateTodo } = require("./types")
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return ;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return ;
    }
    await todo.updateOne({
        _id:updatePayload.id
    },{
        completed:true
    })

    res.json({
        msg:"Todo mark as completed"
    })
})

app.listen(3000);