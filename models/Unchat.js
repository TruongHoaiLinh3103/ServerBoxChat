module.exports = (sequelize, DataTypes) =>  {
    const Unchat = sequelize.define("Unchat", {
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
        }
    })
    Unchat.associate = (model) => {
        Unchat.hasMany(model.Likes, {
            onDelete: "cascade",
        });
    }
    return Unchat;
}