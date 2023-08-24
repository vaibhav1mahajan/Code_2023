// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }
// module.exports can only be write once , if you use it twice then it will override first export
// module.exports = {
//     sumFn : sum,
//     sub};

exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
// console.log(sum(2,8));
// console.log(sub(2,8));