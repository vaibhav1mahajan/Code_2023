function runAfter1s(fn: ()=> void){
    setTimeout(() => {
        fn();
    }, 1000);
}

runAfter1s(()=>{
    console.log("123");
    return;
})

