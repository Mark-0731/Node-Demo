const { User, sequelize } = require('../../../config/data');

module.exports = {
  create: function (req, res) {
    sequelize.query('SELECT email FROM activeusers', {
      type: sequelize.QueryTypes.SELECT
    }).then((data12) => {
      if (data12) {
        const Emails = data12.map(c => c.email);

        if (Emails.includes(req.body.email)) {
          return res.json({
            code: 401,
            status: false,
            message: 'Email already exist.',
          });
        }

        User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          isactive: 1
        }, { silent: true }).then(user => {
          if (!user) {
            return res.json({
              code: 401,
              status: false,
              message: 'User data is not inserted.'
            });
          } else {
            return res.json({
              code: 405,
              status: true,
              message: 'Registered successfully.'
            });
          }
        });
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ code: 500, status: false, message: 'Server error' });
    });
  }
};