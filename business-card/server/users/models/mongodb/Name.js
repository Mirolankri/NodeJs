const mongoose = require("mongoose");
const { SRM2,NRM1 } = require("../../../schemas/Template");

const NameSchema = mongoose.Schema({
    first:SRM2,
    last:SRM2
})

module.exports = NameSchema