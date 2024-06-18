const {
    Pic,
    User
} = require('../../../config/data')
const jwt = require('jsonwebtoken')
module.exports = {
    updatepic: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
        var updatedpic = req.body.updateimg
        User.update({
            picpath: updatedpic
        }, {
            where: {
                id: decoded.id
            }
        }).then((data12) => {
            if (data12) {
                res.json({
                    code: 400,
                    status: true,
                    message: "Profile Picture Update"
                })
            } else {
                res.json({
                    code: 401,
                    status: false,
                    message: "Profile Picture Update"
                })
            }
        })
    }
}