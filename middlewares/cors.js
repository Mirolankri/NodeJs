const express = require ("express")
const app = express()
const cors = require("cors")

const co = app.use(cors({
    origin:["http://127.0.0.1:5500","http://127.0.0.1:3000"]
}))


module.exports = co