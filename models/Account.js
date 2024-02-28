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
        pronouns: {
            type: DataTypes.STRING,
            allowNull: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Account;
}