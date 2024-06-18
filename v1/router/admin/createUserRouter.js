var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/createUser')

router.post('/create',controller.create)
module.exports=router