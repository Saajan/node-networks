const os = require("os");
const chalk = require('chalk');
const log = console.log;

log(chalk.blue("--- OS DETAILS ---"));
log(chalk.green("OS HOSTNAME :"), os.hostname());
log(chalk.green("OS TYPE :"), os.type());
log(chalk.green("OS PLATFORM :"), os.platform());
log(chalk.green("OS ARCHITECTURE :"), os.arch());
log(chalk.green("OS RELEASE :"), os.release());
log(chalk.green("UPTIME :"), os.uptime());


log(chalk.blue("--- CPU DETAILS ---"));
log(chalk.green("CPU :"), os.cpus()[0].model);
log(chalk.green("CPU CORES :"), os.cpus().length);


log(chalk.blue("--- MEMORY --"));
log(chalk.green("TOTAL MEMORY :"), os.totalmem());
log(chalk.green("FREE MEMORY :"), os.freemem());
log(chalk.green(os.endianness()));

log(chalk.blue("---PROCESS DETAILS---"));
log(chalk.green("COMMAND :"), process.title);
log(chalk.green("NODE VERSION :"), process.version);
log(chalk.green("NODE ARGUMENTS :"), process.argv);
log(chalk.green("HOME :"), process.env.HOME , os.homedir());
log(chalk.green("LOGNAME :"), process.env.LOGNAME);
log(chalk.green("PRESENT WORKING DIRECTORY :"), process.env.PWD);
log(chalk.green("AGENT PID :"), process.env.SSH_AGENT_PID);

log(chalk.blue("--- NETWORK ---"));
log("NETWORK :", os.networkInterfaces());
