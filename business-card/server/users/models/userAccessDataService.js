const { handleError } = require("../../utils/errorHandler")
const UserSchema = require("../models/mongodb/User")
const LoginUsersSchema = require("../models/mongodb/LoginUsers")
const mongoose = require("mongoose")
const { ComparePassWord } = require("../helpers/bcrypt")
const config = require('config')
const { GenerateAuthToken } = require("../../auth/providers/jwt")
const lodash = require("lodash")
const DB = config.get("DB");


const getuser = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            let GetAllUser = await UserSchema.findById(_id,{Password:0,isAdmin:0,__v:0})
            if(!GetAllUser) throw new Error(`משתמש לא נמצא`)

            return Promise.resolve(GetAllUser)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const getusers = async () =>{
    if(DB === "MONGODB")
    {
        try {
            let GetAllUser = await UserSchema.find({},{Password:0})
            if(!GetAllUser.length) return `לא נמצאו משתמשים`

            return Promise.resolve(GetAllUser)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const loginUser = async(_user)=>{
    let msg = ``
    if(DB === "MONGODB")
    {
        try {
            let CheckUserLogin = await UserSchema.findOne({email:_user.email})
            if(!CheckUserLogin) throw Error('אחד הפרטים לא נכונים')
            let CPassWord = ComparePassWord(_user.Password,CheckUserLogin.Password);
            let checklogin = await LoginUsersSchema.findOne({user_id:CheckUserLogin._id})
            if(checklogin)
            {
                if(checklogin.count.length === 3)
                {
                    // const DateNow = new Date();
                    const day = 3600 * 1000 * 24
                    if(new Date() - checklogin.count[2] < day) throw new Error(`יש לחכות עוד 24 שעות כדי להתחבר`)
                    
                    let DeleteLog = await LoginUsersSchema.findByIdAndDelete(checklogin._id)
                }
            }

            if(!CPassWord)
            {
                if(!checklogin)
                {
                    const loginuserdetails = {
                        user_id:CheckUserLogin._id,
                        count: new Date()
                    }
                    await LoginUsersSchema(loginuserdetails).save()
                    throw Error('אחד הפרטים לא נכונים')
                }
                if(checklogin.count.length <3)
                {
                    checklogin.count.push(new Date())
                    let UpdateLog = await LoginUsersSchema.findByIdAndUpdate(checklogin._id,{count:checklogin.count})
                }
                throw Error('אחד הפרטים לא נכונים')
            }
            
            const token = GenerateAuthToken(CheckUserLogin)

            msg = 'התחברנו בהצלחה'

            return Promise.resolve({"token":token,"msg":msg})
        } catch (error) {
            error.status = 403
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const registerUser = async(_user)=>{
    if(DB === "MONGODB")
    {
        try {
            let email = _user.email
            let CheckUserRegister = await UserSchema.findOne({email})
            if(CheckUserRegister) throw Error('יוזר רשום כבר')

            let User = await UserSchema(_user).save()
            User = lodash.pick(User,["_id","Name","email"])
            return Promise.resolve(User)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const Deleteuser = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            let DeleteUser = await UserSchema.findByIdAndDelete(_id,{isAdmin:0,Password:0})
            if(!DeleteUser) throw new Error(`משתמש לא נמצא`)

            return Promise.resolve(DeleteUser)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const Updateuser = async(_id,_rawuser)=>{
    if(DB === "MONGODB")
    {
        try {
            let GetUserUpdate = await UserSchema.findByIdAndUpdate(_id,_rawuser)
            if(!GetUserUpdate) throw new Error(`משתמש לא נמצא`)

             GetUserUpdate = await UserSchema.findById(_id,{Password:0,__v:0})

            return Promise.resolve(GetUserUpdate)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const changeUserBusinessStatus = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            let GetUser = await UserSchema.findById(_id,{isBusiness:1,_id:0})
            if(!GetUser) throw new Error(`משתמש לא נמצא`)

            let UpdateUser = await UserSchema.findByIdAndUpdate(_id,{isBusiness:!GetUser.isBusiness}).select(["-__v","-isAdmin","-Password"])
            console.log(UpdateUser);
            return Promise.resolve(UpdateUser)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
module.exports = {registerUser,loginUser,getusers,getuser,Deleteuser,Updateuser,changeUserBusinessStatus}