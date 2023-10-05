const path = require("path");
console.log(path.sep); // give path separater , different output in different os

// filepath
const filePath = path.join('/Course','course-subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'content','sub-folder','testing.txt');
console.log(absolutePath);