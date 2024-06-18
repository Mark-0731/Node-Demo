var express = require('express')
var router = express.Router()
const auth = require('./../../controller/admin/Auth')
const controller = require('./../../controller/admin/removepic')
router.post('/remove', auth.myMiddleware, controller.removepic)
module.exports = router