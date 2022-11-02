const { handleError } = require("../../utils/errorHandler")

const DB = process.env.DB || "MONGODB"
const findMyCards = async(_userId)=>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            return Promise.resolve(`My Card ${_userId}`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const findOne = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            return Promise.resolve(`card no. ${_id}`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const find = async () =>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            return Promise.resolve([{}])
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const create = async(_card)=>{
    if(DB === "MONGODB")
    {
        try {
            return Promise.resolve(`card no. ${_card.id}`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const Remove = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            return Promise.resolve(`card no. ${_id} Deleted`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const Update = async(_id,_rawCard)=>{
    if(DB === "MONGODB")
    {
        try {
            return Promise.resolve(`card no. ${_id} Updated`)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const Like = async(_id,_userid)=>{
    if(DB === "MONGODB")
    {
        try {
            return Promise.resolve(`card no. ${_id} liked by ${_userid}`)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}


module.exports = {find,findOne,create,Remove,Update,Like,findMyCards}