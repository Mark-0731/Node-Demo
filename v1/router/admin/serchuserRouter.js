var express = require('express')
var router = express.Router()


const controller=require('../../controller/admin/searchuser')

router.post('/serchuser',controller.serchuser)
module.exports=router