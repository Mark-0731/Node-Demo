var Sequelize = require('sequelize')
module.exports = function (sequelize, type) {
    return sequelize.define('pic', {
        id: {
            type: type.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        picpath: {
            type: Sequelize.STRING(45),
            allowNull: true
        }
    })
}