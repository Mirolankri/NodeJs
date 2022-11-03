const chalk = require("chalk")
const fs = require("fs");
const path = require('path');
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");
const date_ob = new Date(Date.now());
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();

const DateToday = `${date}${month}${year}`;
const dirlog = 'logs';



const handleError = (res,status,message) => {
    if(CheckIfFileExsist(`${dirlog}/${DateToday}.log`))
    {
        fs.appendFile(`${dirlog}/${DateToday}.log`, `\n${date}-${month}-${year} ${hours}:${minutes}:${seconds}:=> Res:  Message:${message}, Status:${status}`,  (err)=> {
            if (err) return console.log(err);
            console.log('Appended to file!');
         });
    }
    else
    {
        writeFile(`${dirlog}/${DateToday}.log`,`${date}-${month}-${year}:=> Message:${message}, Status:${status}`)
    }

    console.log(chalk.redBright(message));
    return res.status(status).send(message);
};

const CheckIfFileExsist = (path)=>{
    if (fs.existsSync(path)) {
        return true
      } else {
        return false
      }
}


module.exports = {handleError}
