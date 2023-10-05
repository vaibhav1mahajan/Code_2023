const {readFile , writeFile, read} = require('fs');

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    return console.log(result);
});



