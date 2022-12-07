const mongoose = require("mongoose")
const chalk = require("chalk")
const config = require('config')

const DB_NAME = config.get("DB_NAME");
const DB_PASSWORD = config.get("DB_PASSWORD");


mongoose
    .connect("mongodb+srv://"+DB_NAME+":"+DB_PASSWORD+"@cluster0.vdfyzbz.mongodb.net/business-card-app")
    .then(()=>console.log("connected to Mongo Atlas"))
    .catch((err)=>console.log(`Err Mongo ${err}`))