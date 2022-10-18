const express = require ("express")
const chalk = require("chalk")
const app = express()
const PORT = 8181;
const TextListen = `Miros Server Listen On URL :  http://localhost:${PORT}`

app.get('/',(req,res)=>{
    res.send(TextListen)
})
app.listen(PORT,(err)=>{
    if (err) console.log(err);
    console.log(chalk.blue(TextListen));
})