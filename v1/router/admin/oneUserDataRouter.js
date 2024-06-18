var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/oneuserData')

router.get('/userone',controller.userone)
module.exports=router