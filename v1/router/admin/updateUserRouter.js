var express = require('express')
var router = express.Router()
const auth =require('./../../controller/admin/Auth')


const controller=require('./../../controller/admin/updateUser')

router.post('/update',auth.myMiddleware,controller.update)
module.exports=router