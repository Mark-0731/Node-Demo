const Sequelize = require('sequelize');
const appConfig = require('./appConfig');
const ActiveUserModel = require('./../v1/schema/activeuser');
const PicModel = require('./../v1/schema/pic');


const sequelize = new Sequelize(appConfig.SQL_DatabaseName, appConfig.SQL_UserName, appConfig.SQL_Password, {
    host: appConfig.SQL_host,
    dialect: appConfig.SQL_dialect,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
    logging: appConfig.Sequlize_Logging,
});

const Pic = PicModel(sequelize, Sequelize);
const User = ActiveUserModel(sequelize, Sequelize);


Pic.belongsTo(User, {
    foreignKey: 'userid',
    targetKey: 'id'
});
User.hasMany(Pic, {
    foreignKey: 'userid',
    targetKey: 'id'
});


module.exports = {
    Pic,
    User,
    sequelize
},
sequelize.sync({
    force: false
});