const mongoose = require("mongoose");
const AddressSchema = require("./Address");
const ImageSchema = require("./Image");
const { SRM2,NRM1 } = require("./Template");


const CardSchema = mongoose.Schema({
    user_id:mongoose.Types.ObjectId,
    title: SRM2,
    subtitle: SRM2,
    description: SRM2,
    phone:{
        type:String,
        match: RegExp(/^[0][5][0|2|3|4|5|8|9]{1}[-]{0,1}[0-9]{7}$/g)
    },
    email:{
        type: String,
        trim: true,
        match: RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
        required: true,
        unique: true
    },
    web:{
        type: String,
        trim: true,
        match: RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g)
    },
    image: ImageSchema,
    address: AddressSchema,
    bizNumber:{
        type:Number,
        required: true
    },
    created_at:{
        type:Date,
        default: new Date()
    },
    like:[String]
})

module.exports = mongoose.model("card", CardSchema);