const mongoose = require("mongoose")
const { handleError } = require("../../utils/errorHandler")
const CardSchema  = require("./mongodb/Card")

const DB = process.env.DB || "MONGODB"
const getMyCard = async(_userId)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let card = await Test.findOne({ _id:_userId })
            if(!card) card = `לא נמצאו נתונים במסד הנתונים`

            // throw new Error("ops")
            return Promise.resolve(card)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const getCard = async(_id)=>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            const Test = mongoose.model("card", CardSchema);
            // {
            //     title:{$eq:"Miros lankris2"}
            // }
            // const card = await Test.findOne({ title: /miro/i })
            // const card = await Test.findOne({ title: /miro/i }).count()
            // const card = await Test.find().select(["title"])
            let card = await Test.findById(_id)
            if(!card) card = `לא נמצאו נתונים במסד הנתונים`
            // const card = await Test.find().select(["title","email"]).sort({title:-1})
            return Promise.resolve(card)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const getCards = async () =>{
    if(DB === "MONGODB")
    {
        try {
            // throw new Error("ops")
            const GetCards = mongoose.model("card", CardSchema);
            // const card = await GetCards.find({ title: /miro/i },{title:1})          
            const card = await GetCards.find()          
            return Promise.resolve(card)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const CreateCard = async(_card)=>{
    if(DB === "MONGODB")
    {
        try {
            // const Test = CardSchema
            const Test = mongoose.model("card", CardSchema);

            const card = new Test(_card)
            await card.save()
            // return card
            return Promise.resolve(`${card}`)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const DeleteCard = async(_id)=>{
    let message = ''
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let card = await Test.findByIdAndDelete(_id)
            message = `כרטיס נמחק ${card}`
            if(!card) message = `לא נמצא כרטיס כזה ${_id}`

            return Promise.resolve(message)
        } catch (error) {
            // handleError()
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const UpdateCard = async(_id,_rawCard)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            
            let card = await Test.findByIdAndUpdate(_id,_rawCard,{new:true})
            console.log(card);
            if(card == null) card = `לא נמצאו נתונים במסד הנתונים`

            return Promise.resolve(card)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const LikeCard = async(_id,_userid)=>{
    let message = ''
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let card = await Test.findById(_id)
            // console.log(card);
            if(!card){
                message = `לא נמצאו נתונים במסד הנתונים`
            }else{
                if(!card.like.length){
                    card.like.push(_userid)
                    message = `card no. ${_id} liked by ${_userid}`
                }
                else
                {
                    let find = card.like.findIndex((user)=> _userid === user)
                        if(find > -1)
                        {
                            card.like.pop(find)
                            message = `card no. ${_id} unlike by ${_userid}`
                        }
                        else
                        {
                            card.like.push(_userid)
                            message = `card no. ${_id} liked by ${_userid}`
                        }
                }
                    await Test.findByIdAndUpdate(card._id,{like:card.like})
    
                
            }

            return Promise.resolve(message)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}


module.exports = {getCards,getCard,CreateCard,DeleteCard,UpdateCard,LikeCard,getMyCard}