module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define("Notification", {
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notification: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        auth: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Notification;
};