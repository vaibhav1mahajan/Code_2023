function sum(a,b){
    return a+b;
}

function cb(a,b,fn){
    return fn(a,b);
}

const value = cb(1,2,sum);
console.log(value);


const x = {
    firstName:"Vaibhav",
    lastName:"Mahajan",
    age:18,
    isMarried:false
}