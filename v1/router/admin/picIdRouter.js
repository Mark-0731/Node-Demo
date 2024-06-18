var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/picId')

router.get('/pic',controller.picid)
module.exports=router