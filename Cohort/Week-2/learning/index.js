const express = require('express');
const app = express();
const fs = require('fs');
function main(request,response){
    console.log("request reached inside get request");
    response.send("Hello there");
}
app.get('/',main);
app.use(express.json());
app.post('/body',(req,res)=>{
    console.log(req.body);
    res.send("<h1> Hello how are you </h1>");
})
app.listen(3000 || 2000);