function a (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(console.log("waiting in a"));
        }, 100);
    })
   
}
async function c(){
     setTimeout(()=>{
        console.log("fasdkfaslfdkasdf");
     },1000)
        // console.log("aoidfasdfahdfk");  
    
}
async function b(){
    console.log("A");
    console.log("B");
    await c();
    console.log("C");
    console.log("D");
}
b();
console.log("E");
