const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// customEmitter.on('response',()=>{
//     console.log("hello");
// })

// customEmitter.emit('response');
// customEmitter.on('response',()=>{
//     console.log("hello");
// })
// customEmitter.emit('response');


customEmitter.on('response', (name,age)=>{
    console.log(`My name is ${name} and my age is ${age}`);
})

customEmitter.on('response',(name,age,place)=>{
    console.log(`My name is ${name} , my age is ${age} and i live in ${place}`);
})

// customEmitter.emit('response','Vaibhav',18,'Indore');
customEmitter.emit('response','Vaibhav',18);