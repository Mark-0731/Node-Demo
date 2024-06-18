var express = require('express')
var router = express.Router()
const auth =require('../../controller/admin/Auth')

const controller=require('./../../controller/admin/deleteaccout')

router.post('/delete',auth.myMiddleware,controller.delete)
module.exports=router