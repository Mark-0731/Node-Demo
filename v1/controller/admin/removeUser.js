const {
    User,
    Pic
} = require('./../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    destroy: function (req, res) {
        var rid = req.body.id
        User.findOne({
            where: {
                id: rid
            }
        }).then((data12) => {
            if (!data12) {
                res.json({
                    code: 401,
                    status: false,
                    message: "User not found "
                })
            } else {
                Pic.destroy({
                    where: {
                        userid: rid
                    },
                    include: [User]
                }).then(data12 => {
                    User.destroy({
                        where: {
                            id: rid
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
        })
    }
}