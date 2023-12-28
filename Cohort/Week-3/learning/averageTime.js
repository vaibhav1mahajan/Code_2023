const express = require("express");
const app = express();
function start(req,res,next){
        const date = new Date();
        req.timeStart = date.getTime();
        next();
}
function end(req,res,next){
  
         const date = new Date();
         const timeEnd = date.getTime();
         const timeStart = req.timeStart;
         console.log(timeEnd-timeStart);
    

 
}

app.get('/time',start,(req,res,next)=>{
    let ans = 0;
    for(let i =0;i<1000000000;i++){
        ans = ans+1;
    }
    res.send("Hi there")
    next();
},end)
app.listen(3000);