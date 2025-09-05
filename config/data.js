const { Sequelize, DataTypes } = require('sequelize');
const appConfig = require('./appconfig');
const ActiveUserModel = require('./../v1/schema/activeuser');
const PicModel = require('./../v1/schema/pic');

const sequelize = new Sequelize(appConfig.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: appConfig.Sequlize_Logging,
    define: {
        timestamps: true,
        underscored: false
    }
});

const Pic = PicModel(sequelize, DataTypes);
const User = ActiveUserModel(sequelize, DataTypes);

Pic.belongsTo(User, { foreignKey: 'userid', targetKey: 'id' });
User.hasMany(Pic, { foreignKey: 'userid', targetKey: 'id' });

module.exports = { Pic, User, sequelize };

