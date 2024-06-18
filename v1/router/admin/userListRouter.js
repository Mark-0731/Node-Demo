var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/userList')

router.get('/list',controller.list)
module.exports=router