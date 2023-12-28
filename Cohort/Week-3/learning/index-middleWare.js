const express = require('express');
const app = express();
function authMiddleWare(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!="Vaibhav" || password!="pass"){
        res.status(403).json({
            msg:"Incorrect validation"
        });
    } else{
        next();
    }
}
function kidneyMiddleWare(req,res,next){
        const kidney = req.query.kidneyId;
        if(kidney!=1 && kidney!=2){
            res.status(403).json({
                msg:"Incorrect kidney 123"
            });
        } else{
            next();
        }
}
app.get('/health-checkup',authMiddleWare,kidneyMiddleWare,(req,res)=>{
        res.status(200).json({
            msg:"Your kidney is fine"
        });
})
app.listen(3000);