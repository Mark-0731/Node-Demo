

var express = require('express')
var router = express.Router()
const auth =require('./../../controller/admin/Auth')


const controller=require('./../../controller/admin/removeUser')

router.post('/delete',controller.destroy)
module.exports=router