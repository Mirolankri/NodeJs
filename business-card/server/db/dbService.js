// const ENV = "dev"
// const ENV = "prod"

const connectToDB = (_ENV) =>{
    if(_ENV === "dev") require("./mongodb/ConnectToMongoLocally")
    if(_ENV === "prod") require("./mongodb/connectToAtlas")
}

module.exports = connectToDB