const { handleError } = require("../../utils/errorHandler")
const UserSchema = require("../models/mongodb/User")

const DB = process.env.DB || "MONGODB"
const getuser = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            return Promise.resolve(`user no. ${_id}`)
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
            // throw new Error("ops")
            return Promise.resolve([{Name:"Miro"}])
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const loginUser = async(_user)=>{
    if(DB === "MONGODB")
    {
        try {
            return Promise.resolve(`in login ${_user.id}`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const registerUser = async(_user)=>{
    if(DB === "MONGODB")
    {
        try {
            const User = new UserSchema(_user)
            await User.save()
            return Promise.resolve(`register success ${User}`)
        } catch (error) {
            // handleError()
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
            // throw new Error("ops")
            return Promise.resolve(`user no. ${_id} Deleted`)
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
            return Promise.resolve(`user no. ${_id} Updated`)
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
            return Promise.resolve(`user no. ${_id} isBusiness!`)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}



module.exports = {registerUser,loginUser,getusers,getuser,Deleteuser,Updateuser,changeUserBusinessStatus}