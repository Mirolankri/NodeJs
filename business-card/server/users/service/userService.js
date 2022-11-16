const {find,findOne,register,Remove,Update,changeIsBizStatus,login} = require("../models/userAccessDataService");
const registerValidation = require("../validations/Joi/registerValidation");
const normalizeUser = require("../helpers/normalizeUser");
const { handleJoiError } = require("../../utils/errorHandler");

const registerUser = async (_rawuser)=>{
    const { error } = registerValidation(_rawuser);
    if (error) return handleJoiError(error);

    // let user = {..._rawuser}
    try {
        
        let User = normalizeUser(_rawuser)
        User = await register(User)
        return Promise.resolve(User)
    } catch (error) {
        return Promise.reject(error)
    }

}
const loginUser = async (_user)=>{
    // let user = {..._rawuser}
    // user.created_at = new Date()
    try {
        const user = await login(_user)
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error)
    }

}
const getusers = async ()=>{
    try {
        const users = await find()
        return Promise.resolve(users)
    } catch (error) {
        return Promise.reject(error)
    }
}
const getuser = async (_id)=>{
    try {
        const user = await findOne(_id)
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error)
    }
}
const Updateuser = async (_id,_rawuser)=>{
    let user = {..._rawuser}
    // console.log(user);
    try {
        user = await Update(_id,user)
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error)
    }

}
const changeUserBusinessStatus = async (_id)=>{
    // console.log(user);
    try {
        user = await changeIsBizStatus(_id)
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error)
    }

}
const Deleteuser = async (_id)=>{
    let user = _id
    console.log(user);
    try {
        user = await Remove(user)
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error)
    }

}

module.exports = {registerUser,loginUser, getusers,getuser,changeUserBusinessStatus,Deleteuser,Updateuser}