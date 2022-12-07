const data = require("./initialData.json")
const chalk = require("chalk")
const normalizeCard = require("../cards/helpers/normalizeCard")
const { CreateCard } = require("../cards/models/cardAccessDataService")
const normalizeUser = require("../users/helpers/normalizeUser")
const { registerUser } = require("../users/models/userAccessDataService")
const { GeneratePassWord } = require("../users/helpers/bcrypt")

const generateInitialCards = async ()=>{
    const {cards} = data
    cards.forEach(async(card)=>{
        try {
            const userID = "12435465y46tdsfdsfdsfdsyrhgf"
            card = await normalizeCard(card)
            await CreateCard(card)
            return
            
        } catch (error) {
            return console.log(chalk.red(error.message));
        }

    })
}

const generateInitialUsers = async ()=>{
    const {users} = data
    users.forEach(async(user)=>{
        try {
            user = await normalizeUser(user)
            user.Password = GeneratePassWord(user.Password)
            await registerUser(user)
            return
            
        } catch (error) {
            return console.log(chalk.red(error.message));
        }

    })
}


module.exports = {generateInitialCards,generateInitialUsers}