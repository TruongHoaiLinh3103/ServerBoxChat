const { Comment } = require("../models");
const Comments = require("../services/Comment");

module.exports = {
    get: async (req, res) => {
        try {
            const { page = 1, limit = 9, orderBy = 'id', sortBy = 'desc', keyword } = req.query
            const data = await Comments.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 9,
                orderBy,
                sortBy,
                keyword,
            })
            return res.json({success: true, data})
        } catch (error) {
            res.send(error)
        }
    },
    post: async(req, res) => {
        try {
            const post = req.body;
            await Comment.create(post);
            res.json(post)
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
    patch: async (req, res) => {
        try {
            let id = req.params.id;
            const cmt = await Comment.update(req.body, {where: {id: id}});
            res.json(cmt);
            
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
    delete: async (req, res) => {
        try{
            const commentID = req.params.id;
            await Comment.destroy({
                where: {
                    id: commentID,
                }
            })
            res.json("DELETED SUCCESSFULLY");
        }
        catch (error) {
            res.send(error)
        } 
    }
}