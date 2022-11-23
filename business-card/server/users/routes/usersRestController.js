const express = require ("express")
const chalk = require("chalk");
const { registerUser,loginUser,getusers,getuser,Deleteuser,Updateuser,changeUserBusinessStatus } = require("../models/userAccessDataService");
const { handleError, handleJoiError } = require("../../utils/errorHandler");
const registerValidation = require("../validations/Joi/registerValidation");
const { validateUserUpdate, validateLogin } = require("../validations/userValidationService");
const normalizeUser = require("../helpers/normalizeUser");
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
  const { error } = registerValidation(req.body);
  if (error) return handleJoiError(error);

  try {
    
    let user = await normalizeUser(req.body);
     user = await registerUser(user);
    return res.send(user).status(201)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})
router.post("/login",async (req,res,next)=>{
  const { error } = validateLogin(req.body);
  if (error) return handleJoiError(error);

  try {
    const user = await loginUser(req.body);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PUT ############################

router.put("/:id", async (req,res,next)=>{
  const { error } = validateUserUpdate(req.body);
  if (error) return handleJoiError(error);

  const id = req.params.id
  const rawuser = req.body
  try {
    let user = await normalizeUser(rawuser);
        user = await Updateuser(id,user);
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