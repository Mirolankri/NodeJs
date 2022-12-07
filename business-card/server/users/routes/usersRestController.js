const express = require ("express")
const chalk = require("chalk");
const { registerUser,loginUser,getusers,getuser,Deleteuser,Updateuser,changeUserBusinessStatus } = require("../models/userAccessDataService");
const { handleError, handleJoiError, handleBadRequest } = require("../../utils/errorHandler");
const registerValidation = require("../validations/Joi/registerValidation");
const { validateUserUpdate, validateLogin } = require("../validations/userValidationService");
const normalizeUser = require("../helpers/normalizeUser");
const { GeneratePassWord } = require("../helpers/bcrypt");
const auth = require("../../auth/authService");
const router = express.Router()
const { verifyToken, GenerateAuthToken } = require('../../auth/providers/jwt');

require('dotenv').config()

const EndPoint = `http://localhost:${process.env.PORT}/users`;

//################ GET ############################
router.get("/",auth, async (req,res,next)=>{
  const CheckUser = req.user;
    console.log(`${EndPoint}/`);
    try {
      if(!CheckUser.isAdmin) throw new Error("אתה לא מנהל יאללה עוף")

      const users = await getusers()
      return res.send(users)
    } catch (error) {
      return handleError(res,error.status || 403,error.message)
      
    }
})

router.get("/:id",auth, async (req,res,next)=>{
  const id = req.params.id
  const CheckUser = req.user;
  const uesrInfo = verifyToken(req.headers['x-auth-token'])

  try {
    if(!CheckUser.isAdmin && id !== uesrInfo._id) throw new Error(`אתה לא מורשה`)

    const user = await getuser(id)
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 403,error.message)
  }
  // next()
})

//################ POST ############################

router.post("/",async (req,res,next)=>{
  let getuser = req.body;
  
  try {
    const { error } = registerValidation(getuser);
    if (error) return handleError(res,400,`Joi ERROR ${error.details[0].message}`)
  
    let user = normalizeUser(getuser);
    user.Password = GeneratePassWord(user.Password)
    user = await registerUser(user);
    return res.send(user).status(201)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

router.post("/login",async (req,res,next)=>{

  try {
    const { error } = validateLogin(req.body);
    if (error) return handleError(res,400,`Joi ERROR ${error.details[0].message}`)
  
    const user = await loginUser(req.body);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PUT ############################

router.put("/:id", async (req,res,next)=>{
  const rawuser = req.body
  const { error } = validateUserUpdate(rawuser);
  if (error)  return handleError(res,400,`Joi Error ${error.details[0].message}`)

  const CheckUser = req.user;
  const uesrInfo = verifyToken(req.headers['x-auth-token'])
  const id = req.params.id
  try {
    if(!CheckUser.isAdmin && id !== uesrInfo._id) throw new Error(`אתה לא מורשה`)

    let user = await normalizeUser(rawuser);
        user = await Updateuser(id,user);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 500,error.message)
  }
})

//################ PATCH ############################

router.patch("/:id", auth ,async (req,res,next)=>{
  const CheckUser = req.user;
  const uesrInfo = verifyToken(req.headers['x-auth-token'])
  const id = req.params.id
  try {
    if(!CheckUser.isAdmin && id !== uesrInfo._id) throw new Error(`אתה לא מורשה`)

    const user = await changeUserBusinessStatus(id);
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 403,error.message)
  }


  // next()
})
//################  DELETE ############################

router.delete("/:id",auth ,async (req,res,next)=>{
  const CheckUser = req.user;
  const uesrInfo = verifyToken(req.headers['x-auth-token'])
  const id = req.params.id
  try {
    if(!CheckUser.isAdmin && id !== uesrInfo._id) throw new Error(`אתה לא מורשה`)

    const user = await Deleteuser(id)
    return res.send(user)
  } catch (error) {
    return handleError(res,error.status || 403,error.message)
  }
})
module.exports = router