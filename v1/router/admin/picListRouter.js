var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/picList')

router.get('/piclist',controller.piclist)
module.exports=router