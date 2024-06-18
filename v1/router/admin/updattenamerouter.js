var express = require('express')
var router = express.Router()
const auth =require('../../controller/admin/Auth')

const controller=require('./../../controller/admin/updatename')

router.post('/name',auth.myMiddleware,controller.nameupdate)
module.exports=router