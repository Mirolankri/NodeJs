const jwt = require("jsonwebtoken")
const config = require("config")

const JWTKEY = config.get("JWT_KEY")



const GenerateAuthToken = (_user)=>{
    const {_id,isBusiness,isAdmin} = _user
    console.log({_id,isBusiness,isAdmin});
    console.log(_user);
    const token = jwt.sign({_id,isBusiness,isAdmin},JWTKEY)
    return token
}

const verifyToken = (_tokenFromClient)=>{
    try {
        const UserData = jwt.verify(_tokenFromClient,JWTKEY)
        return UserData
    } catch (error) {
        return null
    }
}

exports.GenerateAuthToken = GenerateAuthToken
exports.verifyToken = verifyToken