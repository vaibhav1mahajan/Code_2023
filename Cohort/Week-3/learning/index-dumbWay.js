const express = require('express');
const app = express();
app.get('/health-checkup',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username=="vaibhav" || password=="pass"){
        if(kidneyId==1 || kidneyId==2){
            // do your logic
            res.json({
            msg:"You are fine!"
        }) 
        }
       
    }
    res.status(400).json({msg:"Something wrong with your input"})
})
app.listen(3000);