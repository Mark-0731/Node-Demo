const {
	User
} = require('./../../../config/data')

module.exports = {
	userone: function (req, res) {
		const header = req.headers["authorization"];
		User.findOne({
			where: {
				token: header
			}
		}).then(data44 => {	
			if (data44) {				
				res.json({
					name:data44.name,
					email: data44.email,
					password: data44.password,
					picpath: data44.picpath,
				})
			} else {
				res.json({
					code: 401,
					status: false,
					message: 'User not found'
				})
			}
		})
	}
}