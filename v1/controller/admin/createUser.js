import { User, sequelize } from '../../../config/data';

module.exports = {
    create: function (req, res) {
        sequelize.query('SELECT email FROM activeusers', {
            type: sequelize.QueryTypes.SELECT
        }).then((data12) => {
            if (data12) {
                const Emails = []
                data12.forEach((column) => {
                    Emails.push(column.email)
                });
                if (Emails.includes(req.body.email)) {
                    res.json({
                        code: 401,
                        status: false,
                        message: 'Email already exist.',
                    })
                } else {
                    var rname = req.body.name;
                    var remail = req.body.email;
                    var rpassword = req.body.password;
                    var risactive = 1
                    User.create({
                        name: rname,
                        email: remail,
                        password: rpassword,
                        isactive: risactive
                    }, {
                        silent: true
                    }).then(user => {
                        if (user == null || user === "") {
                            var JsonData = {
                                code: 401,
                                status: false,
                                message: 'User Data is not insert.'
                            }
                            return res.json(JsonData);
                        } else {
                            var JsonData = {
                                code: 405,
                                status: true,
                                message: 'register successfully.'
                            }
                            return res.json(JsonData);
                        }
                    })
                }
            }
        })
    }
}