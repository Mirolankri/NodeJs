const mongoose = require("mongoose")
const { handleError } = require("../../utils/errorHandler")
const CardSchema  = require("./mongodb/Card")
const config = require('config')

const DB = config.get("DB");

const getMyCard = async(_userId)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let card = await Test.find({ user_id:_userId })
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
            const Test = mongoose.model("card", CardSchema);

            const card = new Test(_card)
            await card.save()
            // return card
            return Promise.resolve(`${card}`)
        } catch (error) {
            error.status = 400
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const DeleteCard = async(_id,userLogin)=>{
    let message = ''
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let FindCard = await Test.findById(_id,{user_id:1})
            if(!FindCard) throw new Error(`לא נמצאו נתונים במסד הנתונים`)

            if(FindCard.user_id != userLogin._id && !userLogin.isAdmin) throw new Error(`אתה לא מורשה למחוק כרטיס זה`)

            let card = await Test.findByIdAndDelete(_id)
            if(!card) throw new Error(`לא נמצא כרטיס כזה ${_id}`)

            return Promise.resolve(card)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const UpdateCard = async(_id,_rawCard,userLogin)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let FindCard = await Test.findById(_id,{user_id:1})
            if(!FindCard) throw new Error(`לא נמצאו נתונים במסד הנתונים`)

            if(FindCard.user_id != userLogin._id) throw new Error(`אתה לא מורשה לערוך כרטיס זה`)
            
            let card = await Test.findByIdAndUpdate(_id,_rawCard,{new:true})
            if(card == null) card = `לא נמצאו נתונים במסד הנתונים`

            return Promise.resolve(card)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const UpdateBizNumber = async(_id,_BizNumber)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let FindCard = await Test.findOne({bizNumber:_BizNumber})
            if(FindCard) throw new Error(`קיים מספר עסק כזה`)
            console.log(_id);
            let card = await Test.findByIdAndUpdate(_id,{bizNumber:_BizNumber},{new:true})
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
            if(!card) throw new Error(`לא נמצאו נתונים במסד הנתונים`)
                
            
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
    
                
            

            return Promise.resolve(card)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}
const getMyLikes = async(_userId)=>{
    if(DB === "MONGODB")
    {
        try {
            const Test = mongoose.model("card", CardSchema);
            let card = await Test.find({ like: { "$in" : [_userId]} })            
            if(!card) card = `לא נמצאו נתונים במסד הנתונים`
            return Promise.resolve(card)
        } catch (error) {
            error.status = 404
            return Promise.reject(error)
        }
    }
    return Promise.resolve("not in mongodb")
}



module.exports = {getCards,getCard,CreateCard,DeleteCard,UpdateCard,LikeCard,getMyCard,getMyLikes,UpdateBizNumber}