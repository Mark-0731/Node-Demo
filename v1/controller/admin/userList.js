const {
    User,
    sequelize
} = require('../../../config/data')
const jwt = require('jsonwebtoken')

module.exports = {
    list: function (req, res) {
        const limit = parseInt(req.query.limit) || 10;
        sequelize.query("SELECT COUNT(*) AS total_rows FROM abc", {
            type: sequelize.QueryTypes.SELECT
        }).then(function (result) {
            const totalRows = result[0].total_rows;
            const currentPage = req.query.page || 1;
            const offset = (currentPage - 1) * limit;
            sequelize.query("SELECT * FROM abc LIMIT " + limit + " OFFSET " + offset, {
                type: sequelize.QueryTypes.SELECT
            }).then(function (user) {
                res.json({
                    code: 400,
                    status: true,
                    data: user,
                    entry: totalRows,
                });
            });
        });
    },
};