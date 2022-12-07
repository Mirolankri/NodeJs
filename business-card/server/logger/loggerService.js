const express = require ("express")
const logger = require("./loggers/morganLogger")
const app = express()
const config = require('config')

const LOGGER = config.get("LOGGER");

if(LOGGER == "morgan")
{
    app.use(logger)
}


module.exports = app