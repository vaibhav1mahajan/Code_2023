// type Car = {
//     engine:string,
//     price:number
// }

// type GreetArg = number | string;

// function greet(id : GreetArg){
//     console.log("Hello" + id);
// }

// greet(1);
// greet("1");

type Car = {
    engine:number,//engine:string will give error
    price: number
}

type Car2 = {
    engine:number,
    model:string
}

type MixedCar = Car & Car2;

const t : MixedCar = {
    engine:5,
    price:5,
    model:"Audi"
}