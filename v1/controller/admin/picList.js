const {
	sequelize,
	pic
} = require('../../../config/data')

module.exports = {
	piclist: function (req, res) {
		sequelize.query(`SELECT * FROM abc`, {
			type: sequelize.QueryTypes.SELECT
		}).then(function (email) {
				res.json({
				code: 401,
				message: "Data Found",
				data: email
			})
		});
	},
}