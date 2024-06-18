const {
    sequelize
} = require('../../../config/data')

module.exports = {
    serchuser: function (req, res) {
        rname = req.body.name
        const result = sequelize.query("SELECT * FROM activeusers WHERE name LIKE '%" + rname + "%' or email LIKE '%" + rname + "%'", {
            type: sequelize.QueryTypes.SELECT
        }).then(data12 => {
            if (data12.length > 0) {
                res.json({
                    code: 400,
                    status: true,
                    message: "Users found",
                    data: data12
                })
            } else {
                sequelize.query('SELECT * FROM activeusers', {
                    type: sequelize.QueryTypes.SELECT
                }).then(data123 => {
                    res.json({
                        code: 401,
                        status: false,
                        message: "User not found",
                    });
                })
            }
        })
    }
}