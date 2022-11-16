const mongoose = require("mongoose");
const AddressSchema = require("./Address");
const ImageSchema = require("./Image");
const NameSchema = require("./Name")
const { SRM2,NRM1,PassVALID } = require("../../../schemas/Template");

const UserSchema = mongoose.Schema({
    user_id:mongoose.Types.ObjectId,
    Name:NameSchema,
    Phone:{
        type:String,
        match: RegExp(/^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$/g),
        required: true,
    },
    email:{
        type: String,
        trim: true,
        match: RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        required: true,
        unique: true
    },
    image: ImageSchema,
    Password:PassVALID,
    address: AddressSchema,
    isAdmin:{
        type:Boolean,
        default: false
    },
    isBusiness:{
        type:Boolean,
        default: false
    },
    created_at:{
        type:Date,
        default: new Date()
    },

})

module.exports = mongoose.model("user", UserSchema);