const Blog  = require("../services/Blog");
const { Blogs } = require("../models");

module.exports = {
    get: async (req, res) => {
        try {
            const { page = 1, limit = 4, orderBy = 'id', sortBy = 'asc', keyword } = req.query

            const data = await Blog.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 4,
                orderBy,
                sortBy,
                keyword
            })
            return res.json({success: true, data})
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const post = req.body;
            await Blogs.create(post)
            res.json(post)
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
    patch: async (req, res) => {
        try {
            let id = req.params.id;
            const blog = await Blogs.update(req.body, {where: {id: id}});
            res.json(blog);
            
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
    delete: async (req, res) => {
        try{
            const blogID = req.params.id;
            await Blogs.destroy({
                where: {
                    id: blogID,
                }
            })
            res.json("DELETED SUCCESSFULLY");
        }
        catch (error) {
            res.send(error)
        }
    }
}