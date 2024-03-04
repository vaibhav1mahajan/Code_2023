const fs = require('fs');
const path = './sample.txt';
fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log("file not found or any other error");
        return;
    }
    let dataInEachLine = data.split('\n');
    for(let i =0;i<dataInEachLine.length;i++){
        const dataUpdated = dataInEachLine[i].replace(/\s+/g,' ');
        dataInEachLine[i] = dataUpdated;
    }
    const finalData = dataInEachLine.join('\n');
    fs.writeFile(path,finalData,'utf-8',(err,data)=>{
        if(err){
            console.log("Error while injecting final data");
            return
        } else{
            console.log("Removed extra spaces successfully");
        }
    })
})