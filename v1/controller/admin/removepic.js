const { Pic, User } = require('../../../config/data');
const jwt = require('jsonwebtoken');
module.exports = {
    removepic: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
        Pic.destroy({
            where: {
                id: req.body.id
            }
        }).then((data1214) => {
            User.findOne({
                where: {
                    id: decoded.id
                }
            }).then((data1215) => {
                if (req.body.picpath == data1215.picpath) {
                    Pic.findOne({
                        where: {
                            userid: decoded.id
                        },
                    }).then((data1216) => {
                        if (data1216) {
                            User.update({
                                picpath: data1216.picpath
                            }, {
                                where: {
                                    id: decoded.id
                                }
                            }).then((data1217) => {

                                res.json({
                                    code: 400,
                                    status: true,
                                    message: "Profile Pic Updated"
                                })
                            })
                        } else {
                            User.update({
                                picpath: null
                            }, {
                                where: {
                                    id: decoded.id
                                }
                            }).then((data1234) => {
                                res.json({
                                    code: 400,
                                    status: true,
                                    message: "profile pic deleted"
                                })
                            })
                        }
                    })
                } else {
                    res.json({
                        code: 400,
                        status: true,
                        message: "profile pic deleted"
                    })
                }
            })
        })
    }
}