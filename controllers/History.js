const { History } = require("../models");
const HistoryService = require("../services/History");

module.exports = {
    get: async (req, res) => {
        try {
            const { page = 1, limit = 10, orderBy = 'id', sortBy = 'asc', keyword } = req.query;
            const data = await HistoryService.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 10,
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
        const { user, name, img, menu, rating, productId } = req.body;
        const check = await History.findAll({where: {user: user}});
        const remove = await History.findOne({where: {user: user}});
        const checkName = await History.findOne({where: {user: user, name: name, img: img, menu: menu, rating: rating, productId: productId}});
        if(check){
            if(check.length < 10){
                if(checkName){
                    await History.update(req.body, {where: {id: checkName.id}});
                }else{
                    const post = req.body
                    await History.create(post)
                    res.json(post)
                }
            }else{
                await History.destroy({
                    where: {
                        id: remove.id
                    }
                })
                const post = req.body
                await History.create(post)
                res.json(post)
            }
        }else{
            const post = req.body
            await History.create(post)
            res.json(post)
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            await History.destroy({
                where: {
                    id: id,
                }
            })
            res.json("DELETED SUCCESSFULLY");
        }
        catch (error) {
            res.send({error: "Error!"})
        }

    }
}