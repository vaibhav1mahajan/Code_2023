const fs = require("fs");

fs.writeFile('a.txt',"radhe radhe from write method",'utf-8',(err)=>{
    if(err){
        console.log("Error writing to a.txt");
    } else{
        console.log("Successfully wrote to a.txt");
    }
})   