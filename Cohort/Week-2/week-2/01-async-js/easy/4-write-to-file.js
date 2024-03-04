const fs = require('fs');
fs.writeFile('a.txt','Hello','utf-8',(err,data)=>{
    console.log("Successfull");
})