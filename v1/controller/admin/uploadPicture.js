const {
    User,
    Pic
} = require('../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    upload: function (req, res) {
        const header = req.headers["authorization"];
        User.findOne({
            where: {
                token: header
            }
        }).then((data) => {
            var rpicpath = req.file.filename;
            const decoded = jwt.decode(header)
            Pic.create({
                picpath: rpicpath,
                userid: decoded.id
            }).then(data55 => {

                User.update({
                    picpath: rpicpath
                }, {
                    where: {
                        token: header
                    }
                }).then(data23 => {
                    res.json({
                        code: 400,
                        status: true,
                        message: "Profile pic uploded"
                    })
                })
            });
        })
    },
}