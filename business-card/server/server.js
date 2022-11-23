const express = require ("express")
const app = express()
const chalk = require("chalk")
const {handleError} = require("./utils/errorHandler")
const router = require("./router/router")
const cors = require("./middlewares/cors")
const morgen = require("./logger/loggerService")
const _ = require("lodash")
const connectToDB = require("./db/dbService")

require("./utils/timeService")
require('dotenv').config()

const PORT = process.env.PORT;
const ENV = process.env.ENV;
const TextListen = `Miros Server Listen On URL :  http://localhost:${PORT}`
app.use(cors)
// app.use(morgan(chalk.cyanBright("[:date[web]]")))
app.use(morgen)
app.use(express.json());
app.use(express.static("./public"));

app.use(router)


// app.get('/',(req,res)=>{
//     // throw new Error("This Err")
//     res.send(TextListen)
// })




app.use((err,req,res,next)=>{
    console.log(chalk.redBright(err.message));
    return handleError(res,500,err.message)
})
app.listen(PORT,(err)=>{
    if (err) console.log(err);
    console.log(chalk.blue(TextListen));
    connectToDB(ENV)
})