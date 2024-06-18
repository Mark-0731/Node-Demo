const {
    User,
    sequelize
} = require('../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    nameupdate: function (req, res) {
        const header = req.headers["authorization"]
        const decodedToken = jwt.decode(header)
        User.findAll({
            attributes: ['name']
        }).then((data) => {
            let nameExists = false
            data.forEach(element => {
                if (element.name === req.body.name) {
                    nameExists = true;
                }
            });
            if (nameExists) {
                res.json({
                    code: 401,
                    status: false,
                    message: 'Name is already exist'
                })
            } else {
                User.update({
                    name: req.body.name
                }, {
                    where: {
                        id: decodedToken.id
                    }
                }).then((data12) => {
                    res.json({
                        code: 400,
                        status: true,
                        message: 'Name has been change'
                    })
                })
            }
        })
    }
}