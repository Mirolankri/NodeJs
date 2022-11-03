const express = require ("express")
const chalk = require("chalk");
const { getusers,getuser,registerUser,Deleteuser, Updateuser,loginUser,changeUserBusinessStatus } = require("../service/userService");
const { handleError } = require("../../utils/errorHandler");
// const app = express()
const router = express.Router()
require('dotenv').config()

const EndPoint = `http://localhost:${process.env.PORT}/users`;

//################ GET ############################
router.get("/", async (req,res,next)=>{
    console.log(`${EndPoint}/`);
    try {
      const users = await getusers()
      return res.send(users)
    } catch (error) {
      return handleError(res,error.status || 500,error.message)
      
    }
})

router.get("/:id", async (req,res,next)=>{
  const id = req.params.id
  console.log(id);
  try {
    const user = await getuser(id)
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
  // next()
})

//################ POST ############################

router.post("/",async (req,res,next)=>{
  
  try {
    const user = await registerUser(req.body);
    return res.send(user).status(201)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})
router.post("/login",async (req,res,next)=>{
  
  try {
    const user = await loginUser(req.body);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PUT ############################

router.put("/:id", async (req,res,next)=>{
  const id = req.params.id
  const rawuser = req.body
  try {
    const user = await Updateuser(id,rawuser);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PATCH ############################

router.patch("/:id",async (req,res,next)=>{
  const id = req.params.id
  try {
    const user = await changeUserBusinessStatus(id);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }


  // next()
})
//################  DELETE ############################

router.delete("/:id",async (req,res,next)=>{
  const user_id = req.params.id
  console.log(user_id);
  const user = await Deleteuser(user_id)
  // console.log(`in user delete`);
  return res.send(user)
// next()
})
module.exports = router