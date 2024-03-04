const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    let a =0;
    for(let i = 0;i<10000000000;i++){
        a++;
    }
    res.send("dsjfaslkdjfsklfd");
    res.send("sdfdsfsdf");

})
app.get("/hello",(req,res)=>{
    // res.send("dsjfaslkdjfsklfd");
    res.send("sdfdsfsdf");

})
app.listen(3000);