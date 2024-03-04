type Input = string | number;

function firstEl(arr : Input[]){
    return arr[0];
}

function firstElement(arr : string[] | number[]){
    return arr[0];
}

function identity<Hello>(arg: Hello){
    return arg;
}

console.log(identity<number>(1));

function getFirstEle<T>(arg:T[]){
    return arg[0];
}

const value = getFirstEle(["fdsaf"]).toLowerCase();