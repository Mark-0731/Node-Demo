const {
    User,
    sequelize
} = require('../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    update: function (req, res) {
        const header = req.headers["authorization"]
        const decodedToken = jwt.decode(header)
        sequelize.query("SELECT * FROM activeusers WHERE email = '" + req.body.email + "'  AND id != '" + decodedToken.id + "'", {
            type: sequelize.QueryTypes.SELECT
        }).then(dat12 => {
            if (dat12.length == 0) {
                User.findOne({
                    where: {
                        token: header
                    }
                }).then((dataa12) => {
                    if (req.body.password != dataa12.password) {
                        res.json({
                            code: 401,
                            status: false,
                            message: "Wrong password",
                        })
                    } else {
                        User.update({
                            email: req.body.email,
                            password: req.body.newpassword,
                        }, {
                            where: {
                                token: header
                            }
                        }).then(data13 => {
                            res.json({
                                code: 400,
                                status: true,
                                message: "Updated"
                            })
                        })
                    }
                })
            } else {
                res.json({
                    code: 401,
                    status: false,
                    message: "Already exist"
                })
            }
        })
    }
}