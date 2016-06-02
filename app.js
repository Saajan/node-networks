var os = require("os");

console.log("--- OS DETAILS ---");
console.log("OS HOSTNAME :",os.hostname());
console.log("OS TYPE :",os.type());
console.log("OS PLATFORM :",os.platform());
console.log("OS ARCHITECTURE :",os.arch());
console.log("OS RELEASE :",os.release());
console.log("CONSOLE PROFILE : ",process.env.KONSOLE_PROFILE_NAME);
console.log("DESKTOP SESSION :",process.env.DESKTOP_SESSION);
console.log("USERNAME :",process.env.USERNAME);
console.log("LANGUAGE : ",process.env.LANGUAGE);

console.log("--- NETWORK ---");
console.log("NETWORK :",os.networkInterfaces());


console.log("--- CPU DETAILS ---");
console.log("CPU :",os.cpus()[0].model);
console.log("CPU CORES :",os.cpus().length);


console.log("--- MEMORY --");
console.log("UPTIME :",os.uptime());
console.log("FREE MEMORY : ",os.freemem());
console.log( os.endianness());

console.log("---PROCESS DETAILS---");
console.log("COMMAND : ",process.title);
console.log("NODE VERSION : ",process.version);
console.log("NODE ARGUMENTS : ",process.argv);
console.log("HOME :",process.env.HOME);
console.log("LOGNAME : ",process.env.LOGNAME);
console.log("PRESENT WORKING DIRECTORY :",process.env.PWD);
console.log("AGENT PID :",process.env.SSH_AGENT_PID);
