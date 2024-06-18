var express = require('express')
var router = express.Router()
const controller = require('./../../controller/admin/uploadPicture')
const multer = require('multer')
const auth = require('../../controller/admin/Auth')

const imageupload = multer({

    storage: multer.diskStorage({

        destination: function (req, file, cb) {

            cb(null, './image')
        },
        filename: function (req, file, cb) {

            cb(null, file.fieldname + Date.now() + ".jpg")
        }
    })

})

router.post('/upload', imageupload.single("userfile"), auth.myMiddleware, controller.upload)
module.exports = router