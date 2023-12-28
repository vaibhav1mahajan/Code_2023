const express = require("express");
const app = express();
app.use(express.json());
app.post('/health-checkup',(req,res)=>{
    const kidney = req.body.kidneys;
    res.send("You have " + kidney.length);
})

// global catches (Middleware)
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry, there is up with our server"
    })
})
app.listen(3000);