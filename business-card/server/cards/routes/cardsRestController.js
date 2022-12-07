const express = require ("express")
const chalk = require("chalk");
const mysql = require('mysql');

const { getCards,getCard,CreateCard,DeleteCard,UpdateCard,LikeCard,getMyCard,getMyLikes,UpdateBizNumber } = require("../models/cardAccessDataService");
const { handleError, handleJoiError } = require("../../utils/errorHandler");
const validateCard = require("../validations/cardValidationService");
const normalizeCard = require("../helpers/normalizeCard");
const auth = require("../../auth/authService");

// const app = express()
const router = express.Router()
require('dotenv').config()

const EndPoint = `http://localhost:${process.env.PORT}/cards`;


//################ GET ############################
router.get("/", async (req,res,next)=>{
    console.log(`${EndPoint}/`);
    // console.log("sql");
    // var connection = mysql.createConnection({
    //   host     : '130.61.216.74',
    //   user     : 'imiro',
    //   password : 'k1fu12IpmrG2v7L',
    //   database : 'miros'
    // });
    
    // connection.connect();
    // let data
    // connection.query('SELECT * FROM `numbers` ORDER BY `numbers`.`id` DESC LIMIT 10', function (error, results, fields) {
    //   if (error) throw error;

    //   data = results
    //   console.dir(results);
    //   // console.log(fields);
    //   console.log('The solution is: ', results[0].id);
    // });
    
    // connection.end();
    // return res.send(`${EndPoint}/`)
    // next()
    try {
      // console.dir(data);

      const cards = await getCards()
      // return res.send(cards)
      return res.send(cards)
    } catch (error) {
      return handleError(res,error.status || 500,error.message)
      
    }
})
router.get("/my-cards",auth, async (req,res,next)=>{
  const userId = req.user._id
    console.log(`my-cards ${EndPoint}/my-cards`);
    try {
      if(!req.user.isBusiness) throw new Error("אתה לא משתמש עסקי")

      const card = await getMyCard(userId)
      return res.send(card)
    } catch (error) {
      return handleError(res,error.status || 500,error.message)
      
    }
})
router.get("/my-likes",auth, async (req,res,next)=>{
  const userId = req.user._id
    console.log(`my-likes ${EndPoint}/my-cards`);
    try {

      const card = await getMyLikes(userId)
      return res.send(card)
    } catch (error) {
      return handleError(res,error.status || 500,error.message)
      
    }
})

router.get("/:id", async (req,res,next)=>{
  const id = req.params.id
  console.log(id);
  try {
    const card = await getCard(id)
    return res.send(card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ POST ############################

router.post("/",auth, async (req,res,next)=>{
  let Card = req.body
  try {
    if(!req.user.isBusiness) throw new Error("אתה לא משתמש עסקי")
    const { error } = validateCard(Card);
    if (error) return handleJoiError(error);

     Card = await normalizeCard(Card,req.user._id);
     Card = await CreateCard(Card);
    return res.status(201).send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PUT ############################

router.put("/:id",auth,async (req,res,next)=>{
  try {
    const userLogin = req.user
    const id = req.params.id
    const rawCard = req.body
    if(!userLogin.isBusiness) throw new Error(`אתה לא משתמש עסקי`)
    
    const { error } = validateCard(rawCard);
    if (error) return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    let Card = await normalizeCard(rawCard,userLogin._id);

    
      Card = await UpdateCard(id,Card,userLogin);
      return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }

})

//################ PATCH ############################

router.patch("/update-biznumber/:id",auth,async (req,res,next)=>{
  const id = req.params.id
  const userid = req.user
  const BizNumber = req.body.BizNumber
  try {
    if(!userid.isAdmin) throw new Error(`אתה לא מנהל`)
    const Card = await UpdateBizNumber(id,BizNumber);
    return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }

})
router.patch("/:id",auth,async (req,res,next)=>{
  const id = req.params.id
  const userid = req.user._id
  try {
    
    const Card = await LikeCard(id,userid);
    return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }

})
//################  DELETE ############################

router.delete("/:id",auth,async (req,res,next)=>{
  try {
    const userLogin = req.user
    const card_id = req.params.id
      Card = await DeleteCard(card_id,userLogin)
      return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }

})

module.exports = router