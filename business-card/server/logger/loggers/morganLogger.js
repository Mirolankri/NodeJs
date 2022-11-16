const morgan = require("morgan")
const chalk = require("chalk")
const currentTime = require("../../utils/timeService")


const logger = morgan((tokens,req,res)=>{
    const {year,month,day,hour,minute,seconds} = currentTime()
    const currentdate = `[${day}/${month}/${year} ${hour}:${minute}:${seconds}] `
    const STATUS = tokens.status(req, res);
    const METHOD = tokens.method(req, res);
    const DATE = tokens.date(req, res);
    const URL = tokens.url(req, res);
    const ResTime = tokens['response-time'](req, res);
    let ReturnToServer = `${currentdate} ${STATUS} ${METHOD} ${URL} ${ResTime} ${DATE}`
     if(STATUS >= 400)
        return chalk.red(ReturnToServer)
    
    return chalk.cyanBright(ReturnToServer)


})

module.exports = logger