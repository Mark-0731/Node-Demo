var Sequelize = require('sequelize')
module.exports = function (sequelize, type) {
    return sequelize.define('activeuser', {
        id: {
            type: type.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING(45),
            allowNull: true,
        },
        password: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        token: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        isactive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        picpath: {
            type: Sequelize.STRING(45),
            allowNull: true
        },
        role: {
            type: Sequelize.ENUM('admin', 'user'),
            allowNull: true,
        },
    })
}