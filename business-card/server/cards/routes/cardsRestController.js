const express = require ("express")
const chalk = require("chalk");
const mysql = require('mysql');

const { getCards,getCard,CreateCard,DeleteCard,UpdateCard,LikeCard,getMyCard } = require("../models/cardAccessDataService");
const { handleError, handleJoiError } = require("../../utils/errorHandler");
const validateCard = require("../validations/cardValidationService");
const normalizeCard = require("../helpers/normalizeCard");
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
router.get("/my-cards", async (req,res,next)=>{
  const userId = '637e8494e864e4a0b8d84861'
    console.log(`my-cards ${EndPoint}/my-cards`);
    // return res.send(`${EndPoint}/`)
    // next()
    try {
      const card = await getMyCard(userId)
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
  // next()
})

//################ POST ############################

router.post("/",async (req,res,next)=>{
  const { error } = validateCard(req.body);
  if (error) return handleJoiError(error);

  let Card = req.body
  try {
    
     Card = await normalizeCard(Card);
     Card = await CreateCard(Card);
    return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
  // next()
})

//################ PUT ############################

router.put("/:id", async (req,res,next)=>{
  const id = req.params.id
  const rawCard = req.body
  console.log(rawCard);
  // return
  const { error } = validateCard(rawCard);
  if (error) return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
  let Card = await normalizeCard(rawCard,id);

  try {
     Card = await UpdateCard(id,Card);
    return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }

  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})

//################ PATCH ############################

router.patch("/:id",async (req,res,next)=>{
  const id = req.params.id
  const userid = '123456'
  try {
    const Card = await LikeCard(id,userid);
    return res.send(Card)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }


  // next()
})
//################  DELETE ############################

router.delete("/:id",async (req,res,next)=>{
  const card_id = req.params.id
  console.log(card_id);
  const Card = await DeleteCard(card_id)
  // console.log(`in card delete`);
  return res.send(Card)
// next()
})




router.post('/new', (req, res, next) => {
    console.log('Get Post New')
    next()
  }, (req, res, next) => {
    res.send(req.body)
  })

module.exports = router