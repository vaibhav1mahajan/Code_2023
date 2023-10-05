const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/subfolder/test.txt','utf8');
console.log(first,'\n',second);

writeFileSync('./content/create-through-fs', `Here is result ${first} \n ${second}`,
    {flag:'a'});
