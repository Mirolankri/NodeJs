const express = require ("express")
const logger = require("./loggers/morganLogger")
const app = express()

const LOGGER = "morgan"

if(LOGGER == "morgan")
{
    app.use(logger)
}


module.exports = app