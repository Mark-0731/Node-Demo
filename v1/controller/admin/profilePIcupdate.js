const {
    User,
    Pic
} = require('../../../config/data')

module.exports = {
    profilepicupdate: function (req, res) {
        const header = req.headers["authorization"];
        const decoded = jwt.decode(header)
        Pic.findOne({
            where: {
                id: req.body.id
            },
        }).then(data55 => {
            User.update({
                picpath: data55.picpath
            }, {
                where: {
                    token: header
                }
            }).then(data12 => {
                res.json({
                    code: 400,
                    status: true,
                    message: "profile pic update Successfully "
                });
            })
        })
    },
}