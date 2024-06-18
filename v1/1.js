var express = require('express')
var router = express.Router()

/*---- Admin Login Module For Super,Admin Done*/
var activeUser = require('./router/admin/activeUserRouter')
var createrouter = require('./router/admin/createUserRouter')
var loginUser = require('./router/admin/loginUserRouter')
var profilePicupdate = require('./router/admin/profilePicupdate')
var oneUserData = require('./router/admin/oneUserDataRouter')
var picId = require('./router/admin/picIdRouter')
var picList = require('./router/admin/picListRouter')
var removeUser = require('./router/admin/removeUserRouter')
var updateUser = require('./router/admin/updateUserRouter')
var uploadPicture = require('./router/admin/uploadPictureRouter')
var userList = require('./router/admin/userListRouter')
var updatepic = require('./router/admin/updatepicrouter')
var removepic = require('./router/admin/removepicrouter')
var onepic = require('./router/admin/onepicrouter')
var deleteaccount = require('./router/admin/deleteaccoutrouter')
var updatename = require('./router/admin/updattenamerouter')
var searchuser = require('./router/admin/serchuserRouter')

router.use('/general/activeuser', activeUser)
router.use('/general/create', createrouter)
router.use('/general/loginuser', loginUser)
router.use('/general/profilePicupdate', profilePicupdate)
router.use('/general/oneuserData', oneUserData)
router.use('/general/picid', picId)
router.use('/general/piclist', picList)
router.use('/general/removeuser', removeUser)
router.use('/general/updateuser', updateUser)
router.use('/general/uploadpicture', uploadPicture)
router.use('/general/userlist', userList)
router.use('/general/updatepic', updatepic)
router.use('/general/removepic', removepic)
router.use('/general/onepic', onepic)
router.use('/general/deleteaccount', deleteaccount)
router.use('/general/updateprofile', updatename)
router.use('/general/serchuser', searchuser)







module.exports = router;