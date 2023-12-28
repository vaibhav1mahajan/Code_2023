const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
        data = data.replace(/\s+/g, ' ').trim();
        fs.writeFile('a.txt',data,'utf-8',(err)=>{
            if(err){
                console.log("error");
            } else{
                console.log("success");
            }
        })
})

// function removeExtraSpaces(inputString) {
//     // Use a regular expression to replace multiple spaces with a single space
//     return inputString.replace(/\s+/g, ' ').trim();
// }

// // Example usage:
// const stringWithExtraSpaces = '   This    is   an   example   string   with    extra    spaces.   ';
// const stringWithoutExtraSpaces = removeExtraSpaces(stringWithExtraSpaces);

// console.log(stringWithoutExtraSpaces);
