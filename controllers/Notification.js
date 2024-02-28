const { Notification } = require("../models");
const NotificationService = require("../services/Notification");

module.exports = {
    get: async (req, res) => {
        try {
            const { page = 1, limit = 12, orderBy = 'updatedAt', sortBy = 'desc', keyword } = req.query;
            const data = await NotificationService.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 12,
                orderBy,
                sortBy,
                keyword
            })
            return res.json({success: true, data})
        } catch (error) {
            res.send(error)
        }
    },
    post: async(req, res) => {
        try {
            const {img, user, name, notification, CommentId, auth} = req.body;
            const check = await Notification.findAll({where: {auth: auth}});
            const remove = await Notification.findOne({where: {auth: auth}});
            const checkNotification = await Notification.findOne({where: {img: img, user: user, name: name, notification: notification, CommentId: CommentId, auth: auth}});
            if(check.length < 12){
                if(checkNotification){
                    await Notification.update(req.body, {where: {id: checkNotification.id}});
                }else{
                    const post = await Notification.create({img: img, user: user, name: name, notification: notification, CommentId: CommentId, auth: auth});
                    res.json(post)
                }
            }else{
                await Notification.destroy({
                    where: {
                        id: remove.id
                    }
                })
                const post = await Notification.create({img: img, user: user, name: name, notification: notification, CommentId: CommentId, auth: auth});
                res.json(post)
            }
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
}