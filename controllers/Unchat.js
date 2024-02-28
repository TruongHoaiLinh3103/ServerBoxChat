const { Unchat, Likes } = require("../models");
module.exports = {
    get: async (req, res) => {
        const id = req.params.id;
        const listUnchat = await Unchat.findAll({where: {CommentId: id} ,include: [Likes] })
        res.json(listUnchat)
    },
    post: async(req, res) => {
        const cmt = req.body;
        await Unchat.create(cmt);
        res.json(cmt)
    },
    patch: async (req, res) => {
        try {
            let id = req.params.id;
            const cmt = await Unchat.update(req.body, {where: {id: id}});
            res.json(cmt);
            
        } catch (error) {
            res.json({error: "Error!"})
        }
    },
    delete: async (req, res) => {
        try{
            const UnchatID = req.params.id;
            await Unchat.destroy({
                where: {
                    id: UnchatID,
                }
            })
            res.json("DELETED SUCCESSFULLY");
        }
        catch (error) {
            res.send(error)
        } 
    }
}