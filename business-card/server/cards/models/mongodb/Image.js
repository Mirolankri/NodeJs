const mongoose = require("mongoose");


const ImageSchema = mongoose.Schema({
    url:String,
    alt:String
})

module.exports = ImageSchema