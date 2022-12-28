const express = require ("express")
const router = express.Router()
const cardsRestController = require("../cards/routes/cardsRestController")
const usersRestController = require("../users/routes/usersRestController")
const testRestController = require("../test/routes/testRestController")
const { handleError } = require("../utils/errorHandler")

router.use("/cards",cardsRestController)
router.use("/users",usersRestController)
router.use("/test",testRestController)

router.use((req,res)=>{
    handleError(res,404,"עמוד לא נמצא")
})

module.exports = router