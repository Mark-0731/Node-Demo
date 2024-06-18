

var express = require('express')
var router = express.Router()
const auth =require('./../../controller/admin/Auth')


const controller=require('../../controller/admin/updatepic')

router.post('/profile',auth.myMiddleware,controller.updatepic)
module.exports=router