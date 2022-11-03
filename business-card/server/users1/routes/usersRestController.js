const express = require ("express")
const chalk = require("chalk")
// const app = express()
const router = express.Router()
require('dotenv').config()

const EndPoint = `http://localhost:${process.env.PORT}/users`;


//################ GET ############################
router.get("/",(req,res,next)=>{
    console.log(`${EndPoint}/`);
    return res.send(`${EndPoint}/`)
    // next()
})

router.get("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})

//################ POST ############################

router.post("/",(req,res,next)=>{
  console.log(`${EndPoint}/`);
  return res.send(`${EndPoint}/`)
  // next()
})
router.post("/login",(req,res,next)=>{
  console.log(`${EndPoint}/login`);
  return res.send(`${EndPoint}/login`)
  // next()
})

//################ PUT ############################

router.put("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})

//################ PATCH ############################

router.patch("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})
//################  DELETE ############################

router.delete("/:id",(req,res,next)=>{
  const user_id = req.params.id
  console.log(`in user delete`);
  return res.send(`User Delete: ${user_id}`)
// next()
})




router.post('/new', (req, res, next) => {
    console.log('Get Post New')
    next()
  }, (req, res, next) => {
    res.send(req.body)
  })

module.exports = router