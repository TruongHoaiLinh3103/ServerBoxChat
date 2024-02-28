module.exports = (sequelize, DataTypes) =>  {
    const Comment = sequelize.define("Comment", {
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Comment.associate = (model) => {
        Comment.hasMany(model.Likes, {
            onDelete: "cascade",
        });
        Comment.hasMany(model.Unchat, {
            onDelete: "cascade",
        });
        Comment.hasMany(model.Notification, {
            onDelete: "cascade",
        });
    }
    return Comment;
}