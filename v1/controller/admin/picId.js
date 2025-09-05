

const { Pic } = require('../../../config/data');
const jwt = require('jsonwebtoken')
module.exports = {
    picid: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
        Pic.findAll({
            where: {
                userid: decoded.id
            },
            attributes: ['picpath', 'id'],
        }).then(data55 => {
            if (data55) {ƒ
                res.json({
                    code: 400,
                    status: true,
                    data: data55
                })
            } else {
                res.json({
                    code: 401,
                    status: false,
                    message: "User not uploaded single image"
                })
            }
        })
    }
}