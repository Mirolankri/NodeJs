const {find,findOne,create,Remove,Update,Like,findMyCards} = require("../models/cardAccessDataService")
const normalizeCard = require("../helpers/normalizeCard")
const validateCard = require("../validations/cardValidationService")
const { handleJoiError } = require("../../utils/errorHandler")

const getCards = async ()=>{
    try {
        const cards = await find()
        return Promise.resolve(cards)
    } catch (error) {
        return Promise.reject(error)
    }
}
const getCard = async (_id)=>{
    try {
        const card = await findOne(_id)
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}
const CreateCard = async (_rawCard)=>{
    const { error } = validateCard(_rawCard);
    if (error) return handleJoiError(error);

    // let Card = {..._rawCard}
    try {
        let Card = normalizeCard(_rawCard)
        Card = await create(Card)
        return Promise.resolve(Card)
    } catch (error) {
        return Promise.reject(error)
    }

}
const DeleteCard = async (_id)=>{
    let Card = _id
    console.log(Card);
    try {
        Card = await Remove(Card)
        return Promise.resolve(Card)
    } catch (error) {
        return Promise.reject(error)
    }

}
const UpdateCard = async (_id,_rawCard)=>{
    let Card = {..._rawCard}
    // console.log(Card);
    try {
        Card = await Update(_id,Card)
        return Promise.resolve(Card)
    } catch (error) {
        return Promise.reject(error)
    }

}
const LikeCard = async (_cardid,_userid)=>{
    try {
        Card = await Like(_cardid,_userid)
        return Promise.resolve(Card)
    } catch (error) {
        return Promise.reject(error)
    }

}

const getMyCard = async (_userId)=>{
    try {
        const card = await findMyCards(_userId)
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}


module.exports = {getCards,getCard,CreateCard,DeleteCard,UpdateCard,LikeCard,getMyCard}