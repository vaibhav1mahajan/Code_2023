const fs = require("fs");
// console.log(typeof fs);
//sync method
// fs.writeFileSync("./testing.txt","created from node");
// async method
// fs.writeFile("./testing.txt","created from node using async operation",()=>{});

// const read = fs.readFileSync("./contact.txt","utf-8");
// console.log(read,typeof read);
// fs.readFile("./contact.txt","utf-8", (err,result)=>{
//     if(err){
//         console.log("error",err);
//     } else{
//         console.log(result);
//     }
// })
// difference between sync and async function is that sync function return something whereas async function doesn't return anything else it requires a callback function

// fs.appendFileSync("./contact.txt", "Hello \n");
// const read2 = fs.readFileSync("./contact.txt","utf-8");
// console.log(read);


fs.appendFileSync("./contact.txt", `${Date.now()} \n`);
console.log(fs.readFileSync("./contact.txt","utf-8"))

// fs.unlinkSync("./testing.txt");
console.log(fs.statSync("./contact.txt"))
console.log(fs.statSync("./hello.js").isFile());
// fs.mkdirSync("./hello/a/b/c", {recursive: true});
// fs.rmdirSync("./hello"); // not working , i don't know why
fs.rmSync("./hello",{recursive:true});

// This fs is present in node only , it is not present in browser js
