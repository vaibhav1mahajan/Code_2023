let a = 1;
function print(){
    setTimeout(()=>{
        console.log(a);
        print(a++);
    },1000)
}
print();