const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("Blogs" , {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Blogs;
}