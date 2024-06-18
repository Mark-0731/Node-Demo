const {
    Pic,
    User
} = require('./../../../config/data')
const jwt = require('jsonwebtoken')
module.exports = {
    onepic: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
        User.findOne({
            where: {
                id: decoded.id
            }
        }).then(data55 => {
            if (data55) {
                res.json({
                    code: 400,
                    status: true,
                    message:'',
                    data: data55.picpath
                })
            } else {
                res.json({
                    code: 401,
                    status: false,
                    message: "User not uploaded single image"
                })
            }
        })
    },
}