const {
	User,
	sequelize
} = require('../../../config/data')
const jwt = require('jsonwebtoken')
import { appConfig } from './../../../config/appconfig'

module.exports = {
	login: function (req, res) {
		User.findOne({
			where: {
				email: req.body.email,
				password: req.body.password
			}
		}).then(Userdata => {

			if (!Userdata) {
				res.json({
					code: 401,
					status: false,
					message: 'Wrong Email And Password'
				})
			} else {
				jwt.sign({
					id: Userdata.id,
					role: Userdata.role
				}, appConfig.secretkey, (err, token) => {
					User.update({
						token: token
					}, {
						where: {
							id: Userdata.id
						}
					}).then(data => {

						res.setHeader('Access-Control-Expose-Headers', 'authorization', `${token}`);
						res.setHeader('authorization', `${token}`)
						res.json({
							code: 406,
							status: true,
							message: "login successfull"
						})
					})
				})
			}
		})
	}
}