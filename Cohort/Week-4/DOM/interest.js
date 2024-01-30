const express = require("express");
const app = express();
app.get("/interest",(req,res)=>{
    const x = parseInt(req.query.a);
    const y = parseInt(req.query.b);
    const z = parseInt(req.query.c);
    const amount = x+ x*y*z/100;
    const interest = amount-x;
    res.send({
        total:amount,
        interest:interest
    })
})
app.listen(3000);