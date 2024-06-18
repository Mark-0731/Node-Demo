var express = require('express')
var router = express.Router()
const auth =require('../../controller/admin/Auth')


const controller=require('../../controller/admin/profilePIcupdate')

router.post('/namechange',auth.myMiddleware,controller.profilepicupdate)
module.exports=router