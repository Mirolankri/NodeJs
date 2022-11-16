const mongoose = require("mongoose")
const chalk = require("chalk")

mongoose
    .connect("mongodb+srv://Miros:Im171013@cluster0.vdfyzbz.mongodb.net/business-card-app")
    .then(()=>console.log("connected to Mongo Atlas"))
    .catch((err)=>console.log(`Err Mongo ${err}`))