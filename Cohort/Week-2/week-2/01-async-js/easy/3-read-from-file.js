const fs = require('fs');
fs.readFile('./1-counter.md','utf-8',(err,data)=>{
    if(err){
        console.log('hello i am error');
    } else{
        console.log(data);
    }
})