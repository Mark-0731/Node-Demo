var express = require('express')
var router = express.Router()


const controller=require('./../../controller/admin/onepic')

router.get('/onepic',controller.onepic)
module.exports=router