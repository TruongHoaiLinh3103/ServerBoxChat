const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define("Account" , {
        img: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Account;
}