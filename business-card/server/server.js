const express = require ("express")
const app = express()
const chalk = require("chalk")
const {handleError} = require("./utils/errorHandler")
const router = require("./router/router")
const cors = require("./middlewares/cors")
const morgen = require("./logger/loggerService")
const _ = require("lodash")
const connectToDB = require("./db/dbService")
const config = require('config')
const {generateInitialCards,generateInitialUsers} = require("./initialData/initialDataService")

// console.log(config);
require("./utils/timeService")
// require('dotenv').config()
const PORT = config.get("PORT");
const ENV = config.get("NODE_ENV");
const TextListen = `Miros Server Listen On URL :  http://localhost:${PORT}`
app.use(cors)
app.use(morgen)
app.use(express.json());
app.use(express.static("./public"));

app.use(router)

app.listen(PORT,(err)=>{
    if (err) console.log(err);
    console.log(chalk.blue(TextListen));
    connectToDB(ENV)
    generateInitialCards()
    generateInitialUsers()
})