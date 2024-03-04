function updatePerSecond(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
//  - HH:MM::SS (Eg. 13:45:23)
setInterval(updatePerSecond,1000);