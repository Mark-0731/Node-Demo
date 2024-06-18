var express = require('express')
var router = express.Router()
const auth = require('./../../controller/admin/Auth')



const controller = require('../../controller/admin/activeUser')

router.post('/user', controller.activeuser)
module.exports = router