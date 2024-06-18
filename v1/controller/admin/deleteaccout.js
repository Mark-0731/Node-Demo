const {
    User,
    Pic
} = require('./../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    delete: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
     
        Pic.destroy({
            where: {
                userid: decoded.id
            },
            include: [User]
        }).then(data12 => {
            User.destroy({
                where: {
                    id: decoded.id
                }
            }).then(data123 => {
                res.json({
                    code: 400,
                    status: true,
                    message: "profile delete Successfully "
                })
            })
        })
    }
}