const stream = require('fs');

// const file = stream.createReadStream('./content/big-file.txt',{encoding:'utf8'});
const file = stream.createReadStream('./content/big-file.txt',{highWaterMark:600000}); // to set defalut size of buffer string


file.on('data',(result)=>{
    console.log(result)
})