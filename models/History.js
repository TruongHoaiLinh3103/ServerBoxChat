const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define("History" , {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return History;
}