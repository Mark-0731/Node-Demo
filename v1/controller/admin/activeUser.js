const {
	User
} = require('../../../config/data')

module.exports = {
	activeuser: function (req, res) {
	
		var rid = req.body.id
		
		User.findOne({
			where: {
				id: rid
			}
		}).then((data) => {
			if (!data) {
				res.json({
					code: 401,
					status: false,
					message: 'data not found'
				})
			} else {
				if (data.isactive == 0) {
					User.update({
						isactive: 1
					}, {
						where: {
							id: rid
						}
					}).then(data44 => {
						res.json({
							code: 400,
							status: true,
							message: 'User is online'
						})
					})
				} else if (data.isactive == 1) {
					User.update({
						isactive: 0
					}, {
						where: {
							id: rid
						}
					}).then(data44 => {
						res.json({
							code: 401,
							status: false,
							message: 'User is offline'
						})
					})
				}
			}
		})
	},
}