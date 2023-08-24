const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const upTime = os.uptime()
console.log(upTime/60);
 
const currentOs = {
    user: os.userInfo(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release(),
}
// console.log(currentOs);
const data = os.tmpdir()
console.log(data);
// console.log(os.cpus().length);