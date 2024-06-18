// const user = require('./../../schema/user')
const {
    User
} = require('../../../config/data')

module.exports = {
    myMiddleware(req, res, next) {
        const header = req.headers["authorization"];
        User.findOne({
            where: {
                token: header
            },
        }).then(Userresult => {
            if (!Userresult) {
                res.json({
                    code: 401,
                    status: false,
                    message: 'User not found',
                })
            } else {
                next();
            }
        })
    }
}